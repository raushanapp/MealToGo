import React, { useState } from 'react';
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
import { FavouritesBar } from '@/components/favourites/favourites.bar.component';
import { useRestaurantsContext } from '@/services/restaurants/restaurants.context';
import type { StackScreenProps } from '@react-navigation/stack';
import { RestaurantsStackParamList } from '@/infrastructure/navigation/restaurants.navigators.type';
import { useFavourites } from '@/services/favourites/favourites.context';

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
  const { favourites } = useFavourites();
  const isLoading = restaurantsLoading || locationLoading;
  const insets = useSafeAreaInsets();
  const listContentStyle = {
    paddingBottom: Platform.OS === 'android' ? insets.bottom + 88 : 16,
  };

  const [isToggled, setIsToggled] = useState<boolean>(false);

  return (
    <SafeArea>
      <Search onFavouriteToggled={() => setIsToggled(!isToggled)} isFavouriteToggled={isToggled} />
      {isLoading ? (
        <LoadingContainer>
          <Loading size="large" animating={true} color={MD2Colors.red800} />
        </LoadingContainer>
      ) : (
        <>
          {isToggled && <FavouritesBar favourites={favourites ?? []} />}
          <RestaurantsList
            contentContainerStyle={listContentStyle}
            data={restaurants ?? []}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('RestaurantsDetailsScreen', { restaurant: item })
                }
              >
                <Spacer position="bottom" sizes={'large'}>
                  <RestaurantsInfoCard
                    restaurant={item}
                    error={error?.message ?? null}
                    isLoading={isLoading}
                  />
                </Spacer>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => item.placeId ?? `${item.name ?? 'restaurant'}-${index}`}
          />
        </>
      )}
    </SafeArea>
  );
};
