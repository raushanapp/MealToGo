import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import SearchBar from '@/components/searchbar/SearchBar';
import { useLocationContext } from '@/services/locations/location.context';
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

interface SearchProps {
  onFavouriteToggled: () => void;
  isFavouriteToggled?: boolean;
}

export const Search = ({ onFavouriteToggled, isFavouriteToggled }: SearchProps) => {
  const { keyword, search } = useLocationContext();
  const [searchKeyword, setSearchKeyword] = useState<string>(keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <SearchBar
        icon={isFavouriteToggled ? 'heart' : 'heart-outline'}
        iconColor={isFavouriteToggled ? 'red' : 'black'}
        onPressIcon={onFavouriteToggled}
        searchPlaceholder="Search for location"
        searchQuery={searchKeyword}
        onChangeSearch={(text) => {
          setSearchKeyword(text);
        }}
        onSubmitEditing={() => search(searchKeyword)}
      />
    </SearchContainer>
  );
};
