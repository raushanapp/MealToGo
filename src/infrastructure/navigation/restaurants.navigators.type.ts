import type { StackScreenProps } from '@react-navigation/stack';
import type { Restaurant } from '@/services/restaurants/restaurants.types';

export type RestaurantsStackParamList = {
  RestaurantMainScreen: undefined;
  RestaurantsDetailsScreen: {
    restaurant: Restaurant;
  };
};

export type RestaurantsScreenProps<RouteName extends keyof RestaurantsStackParamList> =
  StackScreenProps<RestaurantsStackParamList, RouteName>;
