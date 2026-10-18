import React from 'react';
import { Searchbar } from 'react-native-paper';

interface SearchBarProps {
  searchQuery: string;
  onChangeSearch: (query: string) => void;
  searchPlaceholder?: string;
  onSubmitEditing?: () => void;
  icon?: string;
  onPressIcon?: () => void;
  iconColor?: string;
}

const SearchBar = ({
  searchQuery,
  onChangeSearch,
  searchPlaceholder = 'Search',
  onSubmitEditing,
  icon,
  onPressIcon,
  iconColor,
}: SearchBarProps) => {
  return (
    <Searchbar
      placeholder={searchPlaceholder}
      onChangeText={onChangeSearch}
      value={searchQuery}
      onSubmitEditing={onSubmitEditing}
      icon={icon}
      onIconPress={onPressIcon}
      iconColor={iconColor}
    />
  );
};

export default SearchBar;
