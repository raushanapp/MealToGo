import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import type { RestaurantsStackParamList } from './restaurants.navigators.type';
import { RestaurantsScreen } from '@/features/restaurants/screens/restaurants.screen';
import { RestaurantsDetailsScreen } from '@/features/restaurants/screens/restaurants.details.screen';

const RestaurantsStack = createStackNavigator<RestaurantsStackParamList>();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator
      screenOptions={{ headerShown: false, ...TransitionPresets.ModalSlideFromBottomIOS }}
    >
      <RestaurantsStack.Screen name="RestaurantMainScreen" component={RestaurantsScreen} />
      <RestaurantsStack.Screen
        name="RestaurantsDetailsScreen"
        component={RestaurantsDetailsScreen}
      />
    </RestaurantsStack.Navigator>
  );
};
