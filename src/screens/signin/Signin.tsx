import React, { Component } from 'react';
import { Container, InputArea, CustomButton, CustomButtonText } from './styles';

export default class SignIn extends Component {
  state = {
    formData: {
      name: '',
      email: ''
    }
  }

  handleSigninClick() {
    console.log("bosta");
  }

  render() {
    return (
      <Container>
        <InputArea>
          <CustomButton onPress={()=> this.handleSigninClick()}>
            <CustomButtonText>Sair</CustomButtonText>
          </CustomButton>
        </InputArea>
      </Container>
    );
  }
}
