import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigation from './HomeNavigation';

const Stack = createDrawerNavigator();

const DrawerNavigation = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={HomeNavigation} />
    </Stack.Navigator>
  );
};
export default DrawerNavigation;
