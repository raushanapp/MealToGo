import React from 'react';
import { useFavourites } from '@/services/favourites/favourites.context';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { RestaurantsInfoCardProps } from '@/features/restaurants/components/restaurants.info.card.components';

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }: { restaurant: RestaurantsInfoCardProps }) => {
  const { favorites, addToFavourites, removeFromFavourites } = useFavourites();
  const isFavourite = favorites.some((fav) => fav.placeId === restaurant.placeId);

  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite ? addToFavourites(restaurant) : removeFromFavourites(restaurant)
      }
    >
      <MaterialDesignIcons
        name={isFavourite ? 'heart' : 'heart-outline'}
        size={24}
        color={isFavourite ? 'red' : 'white'}
      />
    </FavouriteButton>
  );
};
