import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
  type StackNavigationOptions,
} from '@react-navigation/stack';
import { RestaurantsStackParamList } from './restaurants.navigators.type';
import { RestaurantsScreen } from '@/screens/restaurants.screen';
import { RestaurantsDetailsScreen } from '@/screens/restaurants.details.screen';

const RestaurantsStack = createStackNavigator<RestaurantsStackParamList>();

type ScreenConfig = {
  RestaurantMainScreen: {
    id: number;
    name: 'RestaurantMainScreen';
    component: typeof RestaurantsScreen;
    options?: StackNavigationOptions;
  };
  RestaurantsDetailsScreen: {
    id: number;
    name: 'RestaurantsDetailsScreen';
    component: typeof RestaurantsDetailsScreen;
    options?: StackNavigationOptions;
  };
};
type ScreenItem = ScreenConfig[keyof ScreenConfig];

const screens = [
  {
    id: 1,
    name: 'RestaurantMainScreen',
    component: RestaurantsScreen,
  },
  {
    id: 2,
    name: 'RestaurantsDetailsScreen',
    component: RestaurantsDetailsScreen,
  },
] satisfies ScreenItem[];

export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator
      screenOptions={{ headerShown: false, ...TransitionPresets.ModalSlideFromBottomIOS }}
    >
      {screens.map((screen) => (
        <RestaurantsStack.Screen key={screen.id} name={screen.name} component={screen.component} />
      ))}
    </RestaurantsStack.Navigator>
  );
};
