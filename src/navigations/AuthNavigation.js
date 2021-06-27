import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Login = () => <Text>im in Login</Text>;
const SignUp = () => <Text>im in SignUp</Text>;

const Stack = createStackNavigator();

const AuthNavigation = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signUp" component={SignUp} />
    </Stack.Navigator>
  );
};
export default AuthNavigation;
