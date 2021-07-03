import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CONTACT_DETAILS,
  CONTACT_LIST,
  CREATE_CONTACT,
  SETTINGS,
} from '../constants/routeName';
import ContactList from '../screens/contactList';
import ContactDetails from '../screens/contactDetails';
import CreateContact from '../screens/createContact';
import Settings from '../screens/settings';

const Home = createStackNavigator();

const HomeNavigation = props => {
  return (
    <Home.Navigator initialRouteName={CONTACT_LIST}>
      <Home.Screen name={CONTACT_LIST} component={ContactList} />
      <Home.Screen name={CONTACT_DETAILS} component={ContactDetails} />
      <Home.Screen name={CREATE_CONTACT} component={CreateContact} />
      <Home.Screen name={SETTINGS} component={Settings} />
    </Home.Navigator>
  );
};
export default HomeNavigation;
