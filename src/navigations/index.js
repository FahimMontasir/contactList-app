import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';
import {StatusBar} from 'react-native';
import AuthNavigation from './AuthNavigation';
import {GlobalContext} from '../context/reducer/Provider';

const AppNavigation = () => {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {isLoggedIn ? <DrawerNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};
export default AppNavigation;
