import React from 'react';
import BottomNavigationTabs from '@/infrastructure/navigation/bottom.navigation.tabs';
import { RestaurantsProvider } from '@/services/restaurants/restaurants.context';
import { LocationContextProvider } from '@/services/locations/location.context';
import { FavouritesProvider } from '@/services/favourites/favourites.context';

export const AppNavigator = () => {
  return (
    <FavouritesProvider>
      <LocationContextProvider>
        <RestaurantsProvider>
          <BottomNavigationTabs />
        </RestaurantsProvider>
      </LocationContextProvider>
    </FavouritesProvider>
  );
};
