
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/preload/Preload';
import SignIn from '../screens/signin/SignIn';
import Home from '../screens/home/Home';

const Stack = createStackNavigator();

export default class MainStack extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Preload" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    );
  }
}