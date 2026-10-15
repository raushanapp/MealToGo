import React, {
  useState,
  createContext,
  useMemo,
  useEffect,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react';
import { locationRequest } from './location.service';
export interface Location {
  lat: number;
  lng: number;
}
export interface LocationContextTypeValue {
  location: Location | null;
  setLocation: Dispatch<SetStateAction<Location | null>>;
  isLoading: boolean;
  error: Error | null;
  search: (keyword: string) => void;
  setKeyword: Dispatch<SetStateAction<string>>;
  keyword: string;
}
interface LocationContextProviderProps {
  children: ReactNode;
}
const LocationContext = createContext<LocationContextTypeValue | null>(null);
export const LocationContextProvider: React.FC<LocationContextProviderProps> = ({ children }) => {
  const [location, setLocation] = useState<Location | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [keyword, setKeyword] = useState<string>('San Francisco');

  const onSearch = async (searchKeyword: string) => {
    const normalizedKeyword = searchKeyword.trim();
    if (!normalizedKeyword) {
      setError(new Error('Please enter a location to search.'));
      return;
    }
    setKeyword(normalizedKeyword);
  };

  useEffect(() => {
    const normalizedKeyword = keyword.trim();
    if (!normalizedKeyword) {
      return;
    }
    setIsLoading(true);
    setError(null);
    const timeoutId = setTimeout(() => {
      locationRequest(normalizedKeyword.toLocaleLowerCase())
        .then((response) => {
          setLocation(response);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [keyword]);

  const value = useMemo<LocationContextTypeValue>(
    () => ({ location, setLocation, isLoading, error, search: onSearch, keyword, setKeyword }),
    [location, isLoading, error, keyword],
  );

  return <LocationContext.Provider value={value}>{children}</LocationContext.Provider>;
};

export const useLocationContext = (): LocationContextTypeValue => {
  const context = React.useContext(LocationContext);
  if (!context) {
    throw new Error('useLocationContext must be used within a LocationContextProvider');
  }
  return context;
};
