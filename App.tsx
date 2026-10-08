import React from 'react';
import { useColorScheme, StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { RestaurantsScreen } from '@/screens/restaurants.screen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <PaperProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <RestaurantsScreen />
      </PaperProvider>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight,
//   },
//   searchBox: {
//     padding: 12,
//   },
//   listContainer: {
//     flex: 1,
//     backgroundColor: 'blue',
//     padding: 16,
//   },
// });

export default App;
