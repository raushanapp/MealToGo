import React from 'react';
import { StyleSheet, useColorScheme, View, Text, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from './src/components/SearchBar';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={styles.container}>
        <View style={styles.searchBox}>
          <SearchBar searchQuery={searchQuery} onChangeSearch={setSearchQuery} />
        </View>
        <View style={styles.listContainer}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchBox: {
    padding: 12,
  },
  listContainer: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 16,
  },
});

export default App;
