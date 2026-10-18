import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import type { Restaurant } from '@/services/restaurants/restaurants.types';
import { Spacer } from '@/components/spacer/spacer.components';
import { Text } from '@/components/typography/text.component';
import { CompactRestaurantInfo } from '@/components/restaurant/compact.restaurant.info.component';
const FavouritesBarContainer = styled.View`
  padding: 10px;
`;
const FavouritesScrollView = styled(ScrollView).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;
export const FavouritesBar = ({
  favourites,
  onNavigate,
}: {
  favourites: Restaurant[];
  onNavigate: (restaurant: Restaurant) => void;
}) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesBarContainer>
      <Spacer position="left" sizes="medium">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <FavouritesScrollView>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" sizes="medium">
              <TouchableOpacity onPress={() => onNavigate(restaurant)}>
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </FavouritesScrollView>
    </FavouritesBarContainer>
  );
};
