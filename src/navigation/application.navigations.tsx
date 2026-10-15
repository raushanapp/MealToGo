import React from 'react';
import BottomNavigationTabs from '@/navigation/bottom.navigation.tabs';
import { NavigationContainer } from '@react-navigation/native';

export const ApplicationNavigations = () => {
  return (
    // <SafeAreaProvider>
    // <SafeArea>
    <NavigationContainer>
      <BottomNavigationTabs />
    </NavigationContainer>
    // </SafeArea>
    // </SafeAreaProvider>
  );
};
