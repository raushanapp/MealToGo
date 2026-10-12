import { theme } from '@/infrastructure/theme';
import { ApplicationNavigations } from '@/navigation/application.navigations';
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components/native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <ThemeProvider theme={theme}>
        <PaperProvider>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <ApplicationNavigations />
        </PaperProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
