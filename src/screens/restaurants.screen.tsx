import SearchBar from '@/components/SearchBar';
import { Spacer } from '@/components/spacer/spacer.components';
import { SafeArea } from '@/components/utility/safe.area.component';
import { RestaurantsInfoCard } from '@/features/restaurants/components/restaurants.info.card.components';
import { RestaurantsContext } from '@/services/restaurants/restaurants.context';
import type { Restaurant } from '@/services/restaurants/restaurants.types';
import React, { useContext } from 'react';
import { FlatList, Platform } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsList = styled(FlatList<Restaurant>).attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: ${(props) => props.theme.space[3]};
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const { restaurants, isLoading, error } = useContext(RestaurantsContext)!;
  const insets = useSafeAreaInsets();
  const listContentStyle = {
    paddingBottom: Platform.OS === 'android' ? insets.bottom + 88 : 16,
  };

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size="large" animating={true} color={MD2Colors.red800} />
        </LoadingContainer>
      )}
      <SearchContainer>
        <SearchBar searchQuery={searchQuery} onChangeSearch={setSearchQuery} />
      </SearchContainer>
      <RestaurantsList
        contentContainerStyle={listContentStyle}
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
