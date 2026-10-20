import React, { useState, useEffect } from 'react';
import { theme } from '@/infrastructure/theme';
import { RestaurantsProvider } from '@/services/restaurants/restaurants.context';
import { LocationContextProvider } from '@/services/locations/location.context';
import { StatusBar, useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components/native';
import { Navigation } from '@/infrastructure/navigation/index';
import { FavouritesProvider } from '@/services/favourites/favourites.context';
import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);
  console.log('isAuthenticated:', isAuthenticated);
  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesProvider>
          <LocationContextProvider>
            <RestaurantsProvider>
              <PaperProvider>
                <Navigation />
              </PaperProvider>
            </RestaurantsProvider>
          </LocationContextProvider>
        </FavouritesProvider>
      </ThemeProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    </>
  );
}

export default App;
