import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Contact = () => <Text>im in contact</Text>;
const ContactList = () => <Text>im in contactList</Text>;
const CreateContact = () => <Text>im in Create contact</Text>;
const Settings = () => <Text>im in Create setting</Text>;

const Stack = createStackNavigator();

const HomeNavigation = props => {
  return (
    <Stack.Navigator initialRouteName="contact">
      <Stack.Screen name="contact" component={Contact} />
      <Stack.Screen name="contactList" component={ContactList} />
      <Stack.Screen name="createContact" component={CreateContact} />
      <Stack.Screen name="settings" component={Settings} />
    </Stack.Navigator>
  );
};
export default HomeNavigation;
