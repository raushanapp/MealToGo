import React, { useState, createContext, useMemo, useEffect } from 'react';
import { locationRequest } from './location.service';
export interface Location {
  lat: number;
  lng: number;
}
export interface LocationContextTypeValue {
  location: Location | null;
  setLocation: React.Dispatch<React.SetStateAction<Location | null>>;
  isLoading: boolean;
  error: Error | null;
  search: (keyword: string) => void;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  keyword: string;
}
interface LocationContextProviderProps {
  children: React.ReactNode;
}
const LocationContext = createContext<LocationContextTypeValue | null>(null);
export const LocationContextProvider: React.FC<LocationContextProviderProps> = ({ children }) => {
  const [location, setLocation] = useState<Location | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [keyword, setKeyword] = useState<string>('San Francisco');

  const onSearch = async (searchKeyword: string) => {
    setIsLoading(true);
    const normalizedKeyword = searchKeyword.trim();
    if (!normalizedKeyword) {
      setError(new Error('Please enter a location to search.'));
      return;
    }
    setKeyword(normalizedKeyword);
  };

  useEffect(() => {
    if (!keyword.length) {
      //    do't do anything
      return;
    }
    locationRequest(keyword.toLocaleLowerCase())
      .then((response) => {
        setLocation(response);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      })
      .finally(() => setIsLoading(false));
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
