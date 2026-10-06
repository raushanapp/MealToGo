import React from 'react';
import { Searchbar } from 'react-native-paper';

const SearchBar = ({
  searchQuery,
  onChangeSearch,
}: {
  searchQuery: string;
  onChangeSearch: (query: string) => void;
}) => {
  return <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />;
};

export default SearchBar;
