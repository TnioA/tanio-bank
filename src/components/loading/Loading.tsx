import { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { Container, BlockTouch } from './Styles';

export default class Loading extends Component<any, any> {
  render() {
    return (
      this.props.show &&
      <Container>
        <BlockTouch></BlockTouch>
        <ActivityIndicator
          size="large"
          color="white"
          style={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center'
          }}
        ></ActivityIndicator>
      </Container>
    );
  }
}