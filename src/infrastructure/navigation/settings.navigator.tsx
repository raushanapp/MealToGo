import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { SettingsStackParamList } from './settings.navigator.type';
import { SettingsMainScreen } from '@/features/settings/screens/setting.screen';
import { FavouritesScreen } from '@/features/settings/screens/favourites.screen';

const SettingsStack = createStackNavigator<SettingsStackParamList>();

export const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator screenOptions={{ headerShown: true, ...TransitionPresets }}>
      <SettingsStack.Screen name="Settings" component={SettingsMainScreen} />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
    </SettingsStack.Navigator>
  );
};
