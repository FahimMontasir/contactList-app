import 'react-native-gesture-handler';
import React from 'react';
import AppNavigation from './src/navigations';
import GlobalProvider from './src/context/reducer/Provider';

const App = () => {
  return (
    <GlobalProvider>
      <AppNavigation />
    </GlobalProvider>
  );
};
export default App;
