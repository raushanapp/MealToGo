import SearchBar from '@/components/SearchBar';
import { Spacer } from '@/components/spacer/spacer.components';
import { RestaurantsInfoCard } from '@/features/restaurants/components/restaurants.info.card.components';
import React from 'react';
import { FlatList, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

interface RestaurantItem {
  id: string;
}

const RestaurantsList = styled(FlatList<RestaurantItem>).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
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
        <RestaurantsList
          data={[{ id: '1' }, { id: '2' }, { id: '3' }]}
          renderItem={() => (
            <>
              <Spacer position="bottom" sizes={'large'}>
                <RestaurantsInfoCard restaurant={{}} />
              </Spacer>
            </>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeArea>
    </SafeAreaProvider>
  );
};
