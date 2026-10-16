import React from 'react';
import { Platform } from 'react-native';
import { MapScreen } from '@/screens/map.screen';
import { RestaurantsScreen } from '@/screens/restaurants.screen';
import { SettingsScreen } from '@/screens/setting.screen';
import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable';
import { BottomNavigationTabsParamList } from './bottom.navigation.tabs.type';

const BottomTab = createNativeBottomTabNavigator<BottomNavigationTabsParamList>();

const screens = [
  {
    name: 'Restaurants',
    component: RestaurantsScreen,
    title: 'Restaurants',
    iosIcon: 'fork.knife',
    androidIcon: 'https://img.icons8.com/?size=100&id=86029&format=png&color=000000',
  },
  {
    name: 'Settings',
    component: SettingsScreen,
    title: 'Settings',
    iosIcon: 'gearshape',
    androidIcon: 'https://img.icons8.com/?size=100&id=82535&format=png&color=000000',
  },
  {
    name: 'Map',
    component: MapScreen,
    title: 'Map',
    iosIcon: 'map',
    androidIcon: 'https://img.icons8.com/?size=100&id=86788&format=png&color=000000',
  },
] as const;

const createScreenOptions = (screen: (typeof screens)[number]) => ({
  title: screen.title,
  tabBarIcon: Platform.select({
    ios: {
      type: 'sfSymbol' as const,
      name: screen.iosIcon,
    },
    android: {
      type: 'image' as const,
      source: { uri: screen.androidIcon },
    },
  }),
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray',
});

const BottomNavigationTabs = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      {screens.map((screen) => (
        <BottomTab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={createScreenOptions(screen)}
        />
      ))}
    </BottomTab.Navigator>
  );
};

export default BottomNavigationTabs;
