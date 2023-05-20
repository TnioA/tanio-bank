import React from 'react';
import AppContextProvider from './src/context/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/mainStack';

export default function App() {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </AppContextProvider>
  );
}