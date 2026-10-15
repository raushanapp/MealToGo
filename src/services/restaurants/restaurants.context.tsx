import React, { createContext, useEffect, useState, useMemo, useContext } from 'react';
import { useLocationContext } from '@/services/locations/location.context';
import { restaurantsRequest } from '@/services/restaurants/restaurants.services';
import type { Restaurant } from '@/services/restaurants/restaurants.types';
export interface RestaurantsContextValue {
  restaurants: Restaurant[] | null;
  isLoading: boolean;
  error: Error | null;
}
const RestaurantsContext = createContext<RestaurantsContextValue | null>(null);

export const RestaurantsProvider = ({ children }: { children: React.ReactNode }) => {
  const [restaurants, setRestaurants] = useState<Restaurant[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const { location } = useLocationContext();

  const retrieveRestaurants = async (location: { lat: number; lng: number } | null) => {
    if (!location) return;
    setIsLoading(true);
    const normalizedLocationString = `${location.lat},${location.lng}`;
    setTimeout(async () => {
      try {
        const response = await restaurantsRequest(normalizedLocationString);
        setRestaurants(response?.results ?? null);
        setError(null);
      } catch (err) {
        setIsLoading(false);
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      retrieveRestaurants(location);
    }
  }, [location]);

  const value = useMemo<RestaurantsContextValue>(
    () => ({ restaurants, isLoading, error }),
    [restaurants, isLoading, error],
  );

  return <RestaurantsContext.Provider value={value}>{children}</RestaurantsContext.Provider>;
};

export const useRestaurantsContext = (): RestaurantsContextValue => {
  const context = useContext(RestaurantsContext);
  if (!context) {
    throw new Error('useRestaurantsContext must be used within a RestaurantsProvider');
  }
  return context;
};
