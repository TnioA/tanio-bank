
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/preload/Preload';
import Home from '../screens/home/Home';
import SignInStack from './SignInStack';
import MainTab from './MainTab';

const Stack = createStackNavigator();

export default class MainStack extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Preload" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignInStack} />
        <Stack.Screen name="MainTab" component={MainTab} />
      </Stack.Navigator>
    );
  }
}