import React from 'react';
import {Text, View, StatusBar} from 'react-native';

const App = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="tomato" />
      <Text>hello world war 3</Text>
    </View>
  );
};
export default App;
