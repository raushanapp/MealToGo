import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from '@/infrastructure/navigation/app.navigator';
import { useAuthentication } from '@/services/authentication/authentication.context';
import { AccountNavigator } from '@/infrastructure/navigation/account.navigator';

export const Navigation = () => {
  const { isAuthenticated } = useAuthentication();
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
