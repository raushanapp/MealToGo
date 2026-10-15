import React, { useState } from 'react';
import styled from 'styled-components/native';
import SearchBar from '@/components/SearchBar';
import { useLocationContext } from '@/services/locations/location.context';
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const { keyword, search } = useLocationContext();
  const [searchKeyword, setSearchKeyword] = useState<string>(keyword);

  return (
    <SearchContainer>
      <SearchBar
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
