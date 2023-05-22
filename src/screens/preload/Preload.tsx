import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppContext } from '../../context/AppContext';
import { Container } from './Styles';
import AsyncStorage from '@react-native-async-storage/async-storage'
import DataService from '../../services/DataService';

export default class Preload extends Component<any, any> {
  static contextType = AppContext;
  context!: React.ContextType<typeof AppContext>;

  componentDidMount() {
    console.log("Welcome PreLoad");
    this.checkToken();
  }

  async checkToken() {
    const token = await AsyncStorage.getItem('token');
    console.log("GetTokenInMemory: " + token);
    if (!token) {
      this.props.navigation.navigate('SignIn');
      return;
    }

    var response: any = await DataService.checkToken(token);
    if (!response.success) {
      this.props.navigation.navigate('SignIn');
      return;
    }

    await AsyncStorage.setItem('token', response.data.token);
    this.context.setToken(response.data.token);
    this.props.navigation.reset({
      routes: [{ name: 'MainTab' }]
    });
  }

  render() {
    return (
      <Container>
        <Text>Preload</Text>
      </Container>
    );
  }
}
