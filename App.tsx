import React from 'react';
import { theme } from '@/infrastructure/theme';
// import { RestaurantsProvider } from '@/services/restaurants/restaurants.context';
// import { LocationContextProvider } from '@/services/locations/location.context';
import { StatusBar, useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components/native';
import { Navigation } from '@/infrastructure/navigation/index';
// import { FavouritesProvider } from '@/services/favourites/favourites.context';
import { AuthenticationProvider } from '@/services/authentication/authentication.context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationProvider>
          {/* <FavouritesProvider> */}
          {/* <LocationContextProvider> */}
          {/* <RestaurantsProvider> */}
          <PaperProvider>
            <Navigation />
          </PaperProvider>
          {/* </RestaurantsProvider> */}
          {/* </LocationContextProvider> */}
          {/* </FavouritesProvider> */}
        </AuthenticationProvider>
      </ThemeProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    </>
  );
}

export default App;
