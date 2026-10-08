import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '@/components/SearchBar';
import { RestaurantsInfoCard } from '@/features/restaurants/components/restaurants.info.card.components';
import styled from 'styled-components/native';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantsListContainer = styled.View`
  flex: 1;
  background-color: blue;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <SafeAreaProvider>
      <SafeArea>
        <SearchContainer>
          <SearchBar searchQuery={searchQuery} onChangeSearch={setSearchQuery} />
        </SearchContainer>
        <RestaurantsListContainer>
          <RestaurantsInfoCard restaurant={{}} />
        </RestaurantsListContainer>
      </SafeArea>
    </SafeAreaProvider>
  );
};
