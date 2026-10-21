import React, {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  type AuthUser,
  getAuthErrorMessage,
  loginRequest,
  logoutRequest,
  registerRequest,
  subscribeToAuthState,
} from './authentication.service';

interface AuthenticationContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  onLogin: (email: string, password: string) => Promise<void>;
  onRegister: (email: string, password: string, repeatedPassword: string) => Promise<void>;
  onLogout: () => Promise<void>;
  clearError: () => void;
}

const AuthenticationContext = createContext<AuthenticationContextValue | null>(null);

export const AuthenticationProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  // Stays true until Firebase reports the persisted session, and during requests.
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = subscribeToAuthState((firebaseUser) => {
      setUser(firebaseUser);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  const onLogin = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      await loginRequest(email, password);
    } catch (e) {
      setError(getAuthErrorMessage(e));
      setIsLoading(false);
    }
  }, []);

  const onRegister = useCallback(
    async (email: string, password: string, repeatedPassword: string) => {
      if (password !== repeatedPassword) {
        setError('Passwords do not match.');
        return;
      }
      setIsLoading(true);
      setError(null);
      try {
        await registerRequest(email, password);
      } catch (e) {
        setError(getAuthErrorMessage(e));
        setIsLoading(false);
      }
    },
    [],
  );

  const onLogout = useCallback(async () => {
    setError(null);
    try {
      await logoutRequest();
    } catch (e) {
      setError(getAuthErrorMessage(e));
    }
  }, []);

  const clearError = useCallback(() => setError(null), []);

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      isLoading,
      error,
      onLogin,
      onRegister,
      onLogout,
      clearError,
    }),
    [user, isLoading, error, onLogin, onRegister, onLogout, clearError],
  );

  return <AuthenticationContext.Provider value={value}>{children}</AuthenticationContext.Provider>;
};

export const useAuthentication = (): AuthenticationContextValue => {
  const context = useContext(AuthenticationContext);
  if (!context) {
    throw new Error('useAuthentication must be used within an AuthenticationProvider');
  }
  return context;
};
