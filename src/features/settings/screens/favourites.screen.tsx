import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Spacer } from '@/components/spacer/spacer.components';
import { Text } from '@/components/typography/text.component';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFavourites } from '@/services/favourites/favourites.context';
import { SafeArea } from '@/components/utility/safe.area.component';
import { RestaurantsList } from '@/features/restaurants/components/restaurant-list.styles';
import { RestaurantsInfoCard } from '@/features/restaurants/components/restaurants.info.card.components';

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = () => {
  const insets = useSafeAreaInsets();
  const { favourites, error, isLoading } = useFavourites();

  return favourites.length ? (
    <SafeArea>
      <RestaurantsList
        contentContainerStyle={{ paddingBottom: insets.bottom + 88 }}
        data={favourites ?? []}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {}}>
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
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text>No favourites found</Text>
    </NoFavouritesArea>
  );
};
