import { MapScreen } from '@/screens/map.screen';
import { RestaurantsScreen } from '@/screens/restaurants.screen';
import { SettingsScreen } from '@/screens/setting.screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { BottomNavigationTabsParamList } from './bottom.navigation.tabs.type';

const BottomTab = createBottomTabNavigator<BottomNavigationTabsParamList>();

const screens: {
  name: keyof BottomNavigationTabsParamList;
  component: React.ComponentType;
}[] = [
  { name: 'Restaurants', component: RestaurantsScreen },
  { name: 'Settings', component: SettingsScreen },
  { name: 'Map', component: MapScreen },
];

const BottomNavigationTabs = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      {screens.map(({ name, component }) => (
        <BottomTab.Screen key={name} name={name} component={component} />
      ))}
    </BottomTab.Navigator>
  );
};

export default BottomNavigationTabs;
