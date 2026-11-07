import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, View } from 'react-native';
import { Spacer } from '@/components/spacer/spacer.components';
import { Text } from '@/components/typography/text.component';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFavourites } from '@/services/favourites/favourites.context';
import { RestaurantsList } from '@/features/restaurants/components/restaurant-list.styles';
import { RestaurantsInfoCard } from '@/features/restaurants/components/restaurants.info.card.components';
import { FadeInView } from '@/components/animations/fade.animation';

const NoFavouritesArea = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const FavouritesScreen = () => {
  const insets = useSafeAreaInsets();
  const { favourites, error, isLoading } = useFavourites();

  return favourites.length ? (
    <>
      <RestaurantsList
        contentContainerStyle={{ paddingBottom: insets.bottom + 88 }}
        data={favourites ?? []}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {}}>
            <Spacer position="bottom" sizes={'large'}>
              <FadeInView>
                <RestaurantsInfoCard
                  restaurant={item}
                  error={error?.message ?? null}
                  isLoading={isLoading}
                />
              </FadeInView>
            </Spacer>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => item.placeId ?? `${item.name ?? 'restaurant'}-${index}`}
      />
    </>
  ) : (
    <NoFavouritesArea>
      <Text>No favourites found</Text>
    </NoFavouritesArea>
  );
};
