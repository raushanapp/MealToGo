import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { RestaurantsStackParamList } from './restaurants.navigators.type';
import { RestaurantsScreen } from '@/screens/restaurants.screen';
import { RestaurantsDetailsScreen } from '@/screens/restaurants.details.screen';

const RestaurantsStack = createStackNavigator<RestaurantsStackParamList>();

const screens = [
  {
    name: 'RestaurantMainScreen',
    component: RestaurantsScreen,
  },
  {
    name: 'RestaurantsDetails',
    component: RestaurantsDetailsScreen,
  },
] as const;

export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator
      screenOptions={{ headerShown: false, ...TransitionPresets.ModalSlideFromBottomIOS }}
    >
      {screens.map((screen) => (
        <RestaurantsStack.Screen key={screen.name} {...screen} />
      ))}
    </RestaurantsStack.Navigator>
  );
};
