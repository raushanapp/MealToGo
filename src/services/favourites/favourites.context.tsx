import React, {
  createContext,
  type ReactNode,
  useMemo,
  useState,
  useCallback,
  useContext,
} from 'react';
import { Restaurant } from '../restaurants/restaurants.types';

interface FavouritesProviderValueProps {
  favorites: Restaurant[];
  setFavourites: React.Dispatch<React.SetStateAction<Restaurant[]>>;
  add: (restaurant: Restaurant) => void;
  remove: (restaurant: Restaurant) => void;
}

interface FavouritesContextProviderProps {
  children: ReactNode;
}

export const FavouritesContext = createContext<FavouritesProviderValueProps | null>(null);

export const FavouritesProvider = ({ children }: FavouritesContextProviderProps) => {
  const [favorites, setFavourites] = useState<Restaurant[]>([]);
  const add = useCallback((restaurant: Restaurant) => {
    setFavourites((prev) => [...prev, restaurant]);
  }, []);

  const remove = useCallback(
    (restaurant: Restaurant) => {
      const newFavourites = favorites.filter((r) => r.placeId !== restaurant.placeId);
      setFavourites(newFavourites);
    },
    [favorites],
  );

  const value = useMemo(
    () => ({ favorites, setFavourites, add, remove }),
    [favorites, setFavourites, add, remove],
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
