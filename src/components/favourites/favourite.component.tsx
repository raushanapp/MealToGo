import React, { memo, useCallback } from 'react';
import { useFavourites } from '@/services/favourites/favourites.context';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import type { Restaurant } from '@/services/restaurants/restaurants.types';

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

const FavouriteComponent = ({ restaurant }: { restaurant: Restaurant }) => {
  const { isFavourite: checkFavourite, addToFavourites, removeFromFavourites } = useFavourites();
  const isFavourite = checkFavourite(restaurant.placeId);
  const handlePress = useCallback(() => {
    if (isFavourite) {
      removeFromFavourites(restaurant);
    } else {
      addToFavourites(restaurant);
    }
  }, [isFavourite, restaurant, addToFavourites, removeFromFavourites]);

  return (
    <FavouriteButton onPress={handlePress}>
      <MaterialDesignIcons
        name={isFavourite ? 'heart' : 'heart-outline'}
        size={24}
        color={isFavourite ? 'red' : 'white'}
      />
    </FavouriteButton>
  );
};

export const Favourite = memo(FavouriteComponent);
