import React, {
  createContext,
  type ReactNode,
  useMemo,
  useState,
  useEffect,
  useCallback,
  useContext,
} from 'react';
import { createAsyncStorage } from '@react-native-async-storage/async-storage';
import type { Restaurant } from '../restaurants/restaurants.types';

interface FavouritesProviderValueProps {
  favourites: Restaurant[];
  isFavourite: (placeId?: string) => boolean;
  addToFavourites: (restaurant: Restaurant) => void;
  removeFromFavourites: (restaurant: Restaurant) => void;
  error: Error | null;
}

interface FavouritesContextProviderProps {
  children: ReactNode;
}

const storage = createAsyncStorage('app-favourites');
const STORAGE_KEY = 'favourites';

export const FavouritesContext = createContext<FavouritesProviderValueProps | null>(null);

export const FavouritesProvider = ({ children }: FavouritesContextProviderProps) => {
  // Keyed by placeId for O(1) lookup/add/remove; Map keeps insertion order.
  const [favouritesMap, setFavouritesMap] = useState<Map<string, Restaurant>>(() => new Map());
  const [isHydrated, setIsHydrated] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;
    const loadFavourites = async () => {
      try {
        const stored = await storage.getItem(STORAGE_KEY);
        if (!stored || cancelled) {
          return;
        }
        const parsed: Restaurant[] = JSON.parse(stored);
        // Merge so favourites added before hydration finished are not lost.
        setFavouritesMap((prev) => {
          const next = new Map<string, Restaurant>();
          parsed.forEach((r) => r.placeId && next.set(r.placeId, r));
          prev.forEach((r, id) => next.set(id, r));
          return next;
        });
      } catch (e) {
        setError(e as Error);
      } finally {
        if (!cancelled) {
          setIsHydrated(true);
        }
      }
    };
    loadFavourites();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }
    storage
      .setItem(STORAGE_KEY, JSON.stringify(Array.from(favouritesMap.values())))
      .catch((e) => setError(e as Error));
  }, [favouritesMap, isHydrated]);

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
    () => ({ favourites, isFavourite, addToFavourites, removeFromFavourites, error }),
    [favourites, isFavourite, addToFavourites, removeFromFavourites, error],
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
