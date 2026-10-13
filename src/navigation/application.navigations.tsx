import BottomNavigationTabs from '@/navigation/bottom.navigation.tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

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
