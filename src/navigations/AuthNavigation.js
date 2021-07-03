import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LOGIN, SIGNUP} from '../constants/routeName';
import Login from '../screens/login';
import Signup from '../screens/signup';

const Auth = createStackNavigator();

const AuthNavigation = props => {
  return (
    <Auth.Navigator>
      <Auth.Screen name={LOGIN} component={Login} />
      <Auth.Screen name={SIGNUP} component={Signup} />
    </Auth.Navigator>
  );
};
export default AuthNavigation;
