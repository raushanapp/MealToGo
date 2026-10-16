import React from 'react';
import BottomNavigationTabs from '@/infrastructure/navigation/bottom.navigation.tabs';
import { NavigationContainer } from '@react-navigation/native';

export const AppNavigators = () => {
  return (
    <NavigationContainer>
      <BottomNavigationTabs />
    </NavigationContainer>
  );
};
