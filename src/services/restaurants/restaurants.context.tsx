import { restaurantsRequest } from '@/services/restaurants/restaurants.services';
import type { Restaurant } from '@/services/restaurants/restaurants.types';
import React, { createContext, useEffect, useState } from 'react';

export interface RestaurantsContextValue {
  restaurants: Restaurant[] | null;
  isLoading: boolean;
  error: Error | null;
}

export const RestaurantsContext = createContext<RestaurantsContextValue | null>(null);

export const RestaurantsProvider = ({ children }: { children: React.ReactNode }) => {
  const [restaurants, setRestaurants] = useState<Restaurant[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const retrieveRestaurants = async () => {
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const response = await restaurantsRequest();
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
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
