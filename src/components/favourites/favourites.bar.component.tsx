import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import type { Restaurant } from '@/services/restaurants/restaurants.types';
import { Spacer } from '../spacer/spacer.components';
import { CompactRestaurantInfo } from '../restaurant/compact.restaurant.info.component';
const FavouritesBarContainer = styled.View`
  padding: 10px;
`;
const FavouritesScrollView = styled(ScrollView).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;
export const FavouritesBar = ({ favourites }: { favourites: Restaurant[] }) => {
  return (
    <FavouritesBarContainer>
      <FavouritesScrollView>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" sizes="medium">
              <CompactRestaurantInfo restaurant={restaurant} />
            </Spacer>
          );
        })}
      </FavouritesScrollView>
    </FavouritesBarContainer>
  );
};
