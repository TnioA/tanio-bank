import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, InputArea, CustomButton, CustomButtonText, Input } from './Styles';
import { AppContext } from '../../context/AppContext';
import DataService from '../../services/DataService';

export default class Password extends Component<any, any> {
  static contextType = AppContext;
  context!: React.ContextType<typeof AppContext>;

  state = {
    errorMessage: '',
    password: ''
  }

  async handleSignin() {
    if (!this.state.password || this.state.password.length < 1) {
      this.setState({ errorMessage: 'Digite sua senha para continuar.' });
      return;
    }

    console.log("Tentativa de login");
    console.log("CPF:" + this.props.route.params.document);
    console.log("Senha:" + this.state.password);

    this.context.showLoading();
    const response = await DataService.signIn(this.props.route.params.document, this.state.password);
    if(!response.success) {
      this.context.hideLoading();
      this.setState({errorMessage: response.errors[0].message});
      return;
    }

    this.setState({errorMessage: ''});
    this.context.setToken(response.data.token);
    this.context.hideLoading();
    this.props.navigation.reset({
      routes: [{name: 'MainTab'}]
    });
  }

  render() {
    return (
      <Container>
        <InputArea>
          <Input placeholder="Digite seu Senha" value={this.state.password} onChangeText={(value: string)=> this.setState({password: value})} />
        </InputArea>
        {this.state.errorMessage.length > 0 && <Text style={{color: '#fff'}}>{this.state.errorMessage}</Text>}
        <InputArea>
          <CustomButton onPress={() => this.handleSignin()}>
            <CustomButtonText>Próximo</CustomButtonText>
          </CustomButton>
        </InputArea>
      </Container>
    );
  }
}
