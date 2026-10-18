import React, {
  createContext,
  type ReactNode,
  useMemo,
  useState,
  useCallback,
  useContext,
} from 'react';
import type { Restaurant } from '../restaurants/restaurants.types';

interface FavouritesProviderValueProps {
  favourites: Restaurant[];
  isFavourite: (placeId?: string) => boolean;
  addToFavourites: (restaurant: Restaurant) => void;
  removeFromFavourites: (restaurant: Restaurant) => void;
}

interface FavouritesContextProviderProps {
  children: ReactNode;
}

export const FavouritesContext = createContext<FavouritesProviderValueProps | null>(null);

export const FavouritesProvider = ({ children }: FavouritesContextProviderProps) => {
  // Keyed by placeId for O(1) lookup/add/remove; Map keeps insertion order.
  const [favouritesMap, setFavouritesMap] = useState<Map<string, Restaurant>>(() => new Map());

  const addToFavourites = useCallback((restaurant: Restaurant) => {
    const id = restaurant.placeId;
    if (!id) {
      return;
    }
    setFavouritesMap((prev) => {
      if (prev.has(id)) {
        return prev;
      }
      const next = new Map(prev);
      next.set(id, restaurant);
      return next;
    });
  }, []);

  const removeFromFavourites = useCallback((restaurant: Restaurant) => {
    const id = restaurant.placeId;
    if (!id) {
      return;
    }
    setFavouritesMap((prev) => {
      if (!prev.has(id)) {
        return prev;
      }
      const next = new Map(prev);
      next.delete(id);
      return next;
    });
  }, []);

  const isFavourite = useCallback(
    (placeId?: string) => (placeId ? favouritesMap.has(placeId) : false),
    [favouritesMap],
  );

  const favourites = useMemo(() => Array.from(favouritesMap.values()), [favouritesMap]);

  const value = useMemo(
    () => ({ favourites, isFavourite, addToFavourites, removeFromFavourites }),
    [favourites, isFavourite, addToFavourites, removeFromFavourites],
  );

  return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>;
};

export const useFavourites = (): FavouritesProviderValueProps => {
  const context = useContext(FavouritesContext);
  if (!context) {
    throw new Error('useFavourites must be used within a FavouritesProvider');
  }
  return context;
};
