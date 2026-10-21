import {
  type User,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from '@react-native-firebase/auth';

export type AuthUser = User;

export const getAuthErrorMessage = (e: unknown): string => {
  const code = (e as { code?: string })?.code;
  switch (code) {
    case 'auth/invalid-email':
      return 'The email address is invalid.';
    case 'auth/user-not-found':
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'Incorrect email or password.';
    case 'auth/email-already-in-use':
      return 'An account with this email already exists.';
    case 'auth/weak-password':
      return 'Password must be at least 6 characters.';
    case 'auth/too-many-requests':
      return 'Too many attempts. Please try again later.';
    case 'auth/network-request-failed':
      return 'Network error. Check your connection.';
    default:
      return (e as Error)?.message ?? 'Something went wrong.';
  }
};

export const subscribeToAuthState = (callback: (user: AuthUser | null) => void) =>
  onAuthStateChanged(getAuth(), callback);

export const loginRequest = async (email: string, password: string): Promise<AuthUser> => {
  const { user } = await signInWithEmailAndPassword(getAuth(), email.trim(), password);
  return user;
};

export const registerRequest = async (email: string, password: string): Promise<AuthUser> => {
  const { user } = await createUserWithEmailAndPassword(getAuth(), email.trim(), password);
  return user;
};

export const logoutRequest = (): Promise<void> => signOut(getAuth());
