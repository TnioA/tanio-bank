import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppContext } from '../../context/AppContext';
import { Container } from './Styles';

export default class Home extends Component<any, any> {
  static contextType = AppContext;
  context!: React.ContextType<typeof AppContext>;

  render() {
    return (
      <Container>
        <Text>Home</Text>
      </Container>
    );
  }
}
