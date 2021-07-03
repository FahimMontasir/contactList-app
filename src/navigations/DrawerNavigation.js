import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigation from './HomeNavigation';
import {HOME} from '../constants/routeName';

const Stack = createDrawerNavigator();

const DrawerNavigation = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={HOME} component={HomeNavigation} />
    </Stack.Navigator>
  );
};
export default DrawerNavigation;
