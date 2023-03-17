import { Component, createContext } from 'react';

export interface State {
    token: string;
}

export const AppContext = createContext({});

export default class AppContextProvider extends Component<any, any> {
  state: State = {
      token: ''
  }

  setToken(value: string): void {
    this.setState({ token: value});
  }
  
  render() {
      return (
          <AppContext.Provider 
            value={{
              ...this.state, 
              setToken: (value: any): void => this.setToken(value),
            }}
          >
            {this.props.children}
          </AppContext.Provider>
      );
  }
}