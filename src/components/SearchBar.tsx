import React from 'react';
import { Searchbar } from 'react-native-paper';

interface SearchBarProps {
  searchQuery: string;
  onChangeSearch: (query: string) => void;
  searchPlaceholder?: string;
  onSubmitEditing?: () => void;
}

const SearchBar = ({
  searchQuery,
  onChangeSearch,
  searchPlaceholder = 'Search',
  onSubmitEditing,
}: SearchBarProps) => {
  return (
    <Searchbar
      placeholder={searchPlaceholder}
      onChangeText={onChangeSearch}
      value={searchQuery}
      onSubmitEditing={onSubmitEditing}
    />
  );
};

export default SearchBar;
