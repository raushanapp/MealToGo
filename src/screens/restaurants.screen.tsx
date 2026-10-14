import SearchBar from '@/components/SearchBar';
import { Spacer } from '@/components/spacer/spacer.components';
import { SafeArea } from '@/components/utility/safe.area.component';
import { RestaurantsInfoCard } from '@/features/restaurants/components/restaurants.info.card.components';
import { RestaurantsContext } from '@/services/restaurants.context';
import type { Restaurant } from '@/services/restaurants.types';
import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsList = styled(FlatList<Restaurant>).attrs({
  contentContainerStyle: {
    paddingBottom: 16,
  },
  showsVerticalScrollIndicator: false,
})`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const { restaurants, isLoading, error } = useContext(RestaurantsContext)!;
  return (
    <SafeArea>
      <SearchContainer>
        <SearchBar searchQuery={searchQuery} onChangeSearch={setSearchQuery} />
      </SearchContainer>
      <RestaurantsList
        data={restaurants ?? []}
        renderItem={({ item }) => (
          <>
            <Spacer position="bottom" sizes={'large'}>
              <RestaurantsInfoCard
                restaurant={item as React.ComponentProps<typeof RestaurantsInfoCard>['restaurant']}
                error={error?.message ?? null}
                isLoading={isLoading}
              />
            </Spacer>
          </>
        )}
        keyExtractor={(item, index) => item.placeId ?? `${item.name ?? 'restaurant'}-${index}`}
      />
    </SafeArea>
  );
};
