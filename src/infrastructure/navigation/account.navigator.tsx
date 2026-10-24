import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { AccountStackParamList } from '@/infrastructure/navigation/account.navigator.type';

import { LoginScreen } from '@/features/account/screens/login.screen';
import { RegisterScreen } from '@/features/account/screens/register.screen';
import { AccountScreen } from '@/features/account/screens/account.screen';

const AccountStack = createStackNavigator<AccountStackParamList>();

export const AccountNavigator = () => {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <AccountStack.Screen name="Main" component={AccountScreen} />
      <AccountStack.Screen name="Login" component={LoginScreen} />
      <AccountStack.Screen name="Register" component={RegisterScreen} />
    </AccountStack.Navigator>
  );
};
