import React from 'react';
import { Searchbar } from 'react-native-paper';

interface SearchBarProps {
  searchQuery: string;
  onChangeSearch: (query: string) => void;
  searchPlaceholder?: string;
  onSubmitEditing?: () => void;
  icon?: string;
}

const SearchBar = ({
  searchQuery,
  onChangeSearch,
  searchPlaceholder = 'Search',
  onSubmitEditing,
  icon,
}: SearchBarProps) => {
  return (
    <Searchbar
      placeholder={searchPlaceholder}
      onChangeText={onChangeSearch}
      value={searchQuery}
      onSubmitEditing={onSubmitEditing}
      icon={icon}
    />
  );
};

export default SearchBar;
