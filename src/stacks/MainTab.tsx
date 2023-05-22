import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/home/Home';

const Tab = createBottomTabNavigator();

export default class MainTab extends Component {
  render() {
    return (
      <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    );
  }
}