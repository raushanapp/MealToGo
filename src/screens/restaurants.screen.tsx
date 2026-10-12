import SearchBar from '@/components/SearchBar';
import { Spacer } from '@/components/spacer/spacer.components';
import { RestaurantsInfoCard } from '@/features/restaurants/components/restaurants.info.card.components';
import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

interface RestaurantItem {
  id: string;
}

const RestaurantsList = styled(FlatList<RestaurantItem>).attrs({
  contentContainerStyle: {
    paddingBottom: 16,
  },
  showsVerticalScrollIndicator: false,
})`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <>
      <SearchContainer>
        <SearchBar searchQuery={searchQuery} onChangeSearch={setSearchQuery} />
      </SearchContainer>
      <RestaurantsList
        data={[{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }]}
        renderItem={() => (
          <>
            <Spacer position="bottom" sizes={'large'}>
              <RestaurantsInfoCard restaurant={{}} />
            </Spacer>
          </>
        )}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};
