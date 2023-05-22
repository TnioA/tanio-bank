
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Document from '../screens/signin/Document';
import Password from '../screens/signin/Password';

const Stack = createStackNavigator();

export default class SignInStack extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Document" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Document" component={Document} />
        <Stack.Screen name="Password" component={Password} />
      </Stack.Navigator>
    );
  }
}