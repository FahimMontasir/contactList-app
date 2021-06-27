import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';
import {StatusBar} from 'react-native';
DrawerNavigation;
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <DrawerNavigation />
    </NavigationContainer>
  );
};
export default AppNavigation;
