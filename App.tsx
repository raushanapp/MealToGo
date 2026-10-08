import React from 'react';
import { useColorScheme, StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { RestaurantsScreen } from '@/screens/restaurants.screen';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '@/infrastructure/theme';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <ThemeProvider theme={theme}>
        <PaperProvider>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <RestaurantsScreen />
        </PaperProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
