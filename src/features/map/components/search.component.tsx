import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import SearchBar from '@/components/searchbar/SearchBar';
import { useLocationContext } from '@/services/locations/location.context';
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 45px;
  width: 100%;
`;

export const Search = () => {
  const { keyword, search } = useLocationContext();
  const [searchKeyword, setSearchKeyword] = useState<string>(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <SearchBar
        searchPlaceholder="Search for location"
        icon="map"
        searchQuery={searchKeyword}
        onChangeSearch={(text) => {
          setSearchKeyword(text);
        }}
        onSubmitEditing={() => search(searchKeyword)}
      />
    </SearchContainer>
  );
};
