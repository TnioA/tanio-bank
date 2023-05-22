import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, InputArea, CustomButton, CustomButtonText, Input } from './Styles';
import { AppContext } from '../../context/AppContext';
import DataService from '../../services/DataService';

export default class Document extends Component<any, any> {
  static contextType = AppContext;
  context!: React.ContextType<typeof AppContext>;

  state = {
    errorMessage: '',
    document: ''
  }

  async handleNext() {
    if (!this.state.document || this.state.document.length < 1) {
      this.setState({ errorMessage: 'Digite um CPF válido para continuar.' });
      return;
    }

    this.context.showLoading();
    const response = await DataService.checkDocument(this.state.document);
    if(!response.success) {
      this.context.hideLoading();
      this.setState({errorMessage: 'Não foi encontrado uma conta para o CPF informado.'});
      return;
    }

    this.setState({ errorMessage: '' });
    this.context.hideLoading();
    this.props.navigation.navigate('Password', {document: this.state.document});
  }

  render() {
    return (
      <Container>
        <InputArea>
          <Input placeholder="Digite seu CPF" value={this.state.document} onChangeText={(value: string)=> this.setState({document: value})} />
        </InputArea>
        {this.state.errorMessage.length > 0 && <Text style={{ color: '#fff' }}>{this.state.errorMessage}</Text>}
        <InputArea>
          <CustomButton onPress={() => this.handleNext()}>
            <CustomButtonText>Próximo</CustomButtonText>
          </CustomButton>
        </InputArea>
      </Container>
    );
  }
}
