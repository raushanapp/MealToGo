import { MapScreen } from '@/screens/map.screen';
import { RestaurantsScreen } from '@/screens/restaurants.screen';
import { SettingsScreen } from '@/screens/setting.screen';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Easing } from 'react-native';
import { BottomNavigationTabsParamList } from './bottom.navigation.tabs.type';

const BottomTab = createBottomTabNavigator<BottomNavigationTabsParamList>();
type IconName = React.ComponentProps<typeof MaterialDesignIcons>['name'];

const screens: {
  name: keyof BottomNavigationTabsParamList;
  component: React.ComponentType;
  icon: IconName;
}[] = [
  { name: 'Restaurants', component: RestaurantsScreen, icon: 'silverware-fork-knife' },
  { name: 'Settings', component: SettingsScreen, icon: 'cog-outline' },
  { name: 'Map', component: MapScreen, icon: 'map-outline' },
];

const BottomNavigationTabs = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
        transitionSpec: {
          animation: 'timing',
          config: {
            duration: 300,
            easing: Easing.inOut(Easing.ease),
          },
        },
        tabBarStyle: {
          // height: 65,
          paddingTop: 6,
          paddingBottom: 6,
          elevation: 8,
        },
      }}
    >
      {screens.map(({ name, component, icon }) => (
        <BottomTab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialDesignIcons name={icon} color={color} size={size} />
            ),
          }}
        />
      ))}
    </BottomTab.Navigator>
  );
};

export default BottomNavigationTabs;
