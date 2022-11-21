import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import DrawerNavigation from './src/components/navigation/DrawerNavigation';
import {store} from './src/store';

// wrapper needed to pass store context to app to be able to use dispatch
// context can only be passed from parent to child
const AppWrapper = () => {
  return (
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  );
};

export const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <DrawerNavigation />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
};

export default AppWrapper;
