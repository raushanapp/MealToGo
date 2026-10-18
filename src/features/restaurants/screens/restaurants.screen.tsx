import React from 'react';
import { FlatList, Platform, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { Spacer } from '@/components/spacer/spacer.components';
import { SafeArea } from '@/components/utility/safe.area.component';
import { RestaurantsInfoCard } from '@/features/restaurants/components/restaurants.info.card.components';
import type { Restaurant } from '@/services/restaurants/restaurants.types';
import { Search } from '@/features/restaurants/components/search.component';
import { useLocationContext } from '@/services/locations/location.context';
import { useRestaurantsContext } from '@/services/restaurants/restaurants.context';
import type { StackScreenProps } from '@react-navigation/stack';
import { RestaurantsStackParamList } from '@/infrastructure/navigation/restaurants.navigators.type';

type Props = StackScreenProps<RestaurantsStackParamList, 'RestaurantMainScreen'>;

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

export const RestaurantsScreen = ({ navigation }: Props) => {
  const { restaurants, isLoading: restaurantsLoading, error } = useRestaurantsContext();
  const { isLoading: locationLoading } = useLocationContext();
  const isLoading = restaurantsLoading || locationLoading;
  const insets = useSafeAreaInsets();
  const listContentStyle = {
    paddingBottom: Platform.OS === 'android' ? insets.bottom + 88 : 16,
  };

  return (
    <SafeArea>
      <Search />
      {isLoading ? (
        <LoadingContainer>
          <Loading size="large" animating={true} color={MD2Colors.red800} />
        </LoadingContainer>
      ) : (
        <RestaurantsList
          contentContainerStyle={listContentStyle}
          data={restaurants ?? []}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('RestaurantsDetailsScreen', { restaurant: item })}
            >
              <Spacer position="bottom" sizes={'large'}>
                <RestaurantsInfoCard
                  restaurant={
                    item as React.ComponentProps<typeof RestaurantsInfoCard>['restaurant']
                  }
                  error={error?.message ?? null}
                  isLoading={isLoading}
                />
              </Spacer>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => item.placeId ?? `${item.name ?? 'restaurant'}-${index}`}
        />
      )}
    </SafeArea>
  );
};
