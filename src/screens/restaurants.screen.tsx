import React from 'react';

import { View, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../components/SearchBar';
import { RestaurantsInfoCard } from '../features/restaurants/components/restaurants.info.card.components';

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchBox}>
          <SearchBar searchQuery={searchQuery} onChangeSearch={setSearchQuery} />
        </View>
        <View style={styles.listContainer}>
          <RestaurantsInfoCard restaurant={{}} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

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
