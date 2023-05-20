import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, InputArea, CustomButton, CustomButtonText, Input } from './Styles';
import { AppContext } from '../../context/AppContext';
import DataService from '../../services/DataService';

export default class SignIn extends Component<any, any> {
  static contextType = AppContext;
  context!: React.ContextType<typeof AppContext>;

  state = {
    errorMessage: '',
    formData: {
      name: '',
      email: ''
    }
  }

  async handleSigninClick() {
    this.context.showLoading();
    const response = await DataService.signIn(this.state.formData.email, this.state.formData.name);
    if(!response.success) {
      this.context.hideLoading();
      this.setState({errorMessage: response.errors[0].message});
      return;
    }

    this.context.setToken(response.data.token);
    this.context.hideLoading();
  }

  render() {
    return (
      <Container>
        <InputArea>
          <Input placeholder="Digite seu CPF" />
        </InputArea>
        <InputArea>
          <Input placeholder="Digite seu Senha" />
        </InputArea>
        {this.state.errorMessage.length > 0 && <Text style={{color: '#fff'}}>{this.state.errorMessage}</Text>}
        <InputArea>
          <CustomButton onPress={() => this.handleSigninClick()}>
            <CustomButtonText>Próximo</CustomButtonText>
          </CustomButton>
        </InputArea>
      </Container>
    );
  }
}
