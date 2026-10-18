import React, {
  createContext,
  type ReactNode,
  useMemo,
  useState,
  useCallback,
  useContext,
} from 'react';
import { RestaurantsInfoCardProps } from '@/features/restaurants/components/restaurants.info.card.components';

interface FavouritesProviderValueProps {
  favorites: RestaurantsInfoCardProps[];
  setFavourites: React.Dispatch<React.SetStateAction<RestaurantsInfoCardProps[]>>;
  addToFavourites: (restaurant: RestaurantsInfoCardProps) => void;
  removeFromFavourites: (restaurant: RestaurantsInfoCardProps) => void;
}

interface FavouritesContextProviderProps {
  children: ReactNode;
}

export const FavouritesContext = createContext<FavouritesProviderValueProps | null>(null);

export const FavouritesProvider = ({ children }: FavouritesContextProviderProps) => {
  const [favorites, setFavourites] = useState<RestaurantsInfoCardProps[]>([]);
  const addToFavourites = useCallback((restaurant: RestaurantsInfoCardProps) => {
    setFavourites((prev) => [...prev, restaurant]);
  }, []);

  const removeFromFavourites = useCallback(
    (restaurant: RestaurantsInfoCardProps) => {
      const newFavourites = favorites.filter((r) => r.placeId !== restaurant.placeId);
      setFavourites(newFavourites);
    },
    [favorites],
  );

  const value = useMemo(
    () => ({ favorites, setFavourites, addToFavourites, removeFromFavourites }),
    [favorites, setFavourites, addToFavourites, removeFromFavourites],
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
