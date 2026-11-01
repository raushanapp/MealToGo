import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { SettingsStackParamList } from './settings.navigator.type';
import { SettingsMainScreen } from '@/features/settings/screens/setting.screen';

const SettingsStack = createStackNavigator<SettingsStackParamList>();

export const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{ headerShown: false, ...TransitionPresets.ModalSlideFromBottomIOS }}
    >
      <SettingsStack.Screen name="SettingsMainScreen" component={SettingsMainScreen} />
    </SettingsStack.Navigator>
  );
};
