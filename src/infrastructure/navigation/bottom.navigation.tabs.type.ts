import type { NavigatorScreenParams } from '@react-navigation/native';
import type { RestaurantsStackParamList } from './restaurants.navigators.type';

export type BottomNavigationTabsParamList = {
  RestaurantMainScreen: NavigatorScreenParams<RestaurantsStackParamList> | undefined;
  SettingsMainScreen: undefined;
  MapScreen: undefined;
};
