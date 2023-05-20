import { Component, createContext } from 'react';
import Loading from '../components/loading/Loading';

export interface IAppContext {
  token: string;
  setToken(value: string): void;
  showLoading(): void;
  hideLoading(): void;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export default class AppContextProvider extends Component<any, any> {
  state = {
    token: '',
    showLoading: false
  }

  setToken(value: string): void {
    this.setState({ token: value });
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          setToken: (value: string): void => this.setToken(value),
          showLoading: (): void => this.setState({showLoading: true}),
          hideLoading: (): void => this.setState({showLoading: false}),
        }}
      >
        {this.props.children}
        <Loading show={this.state.showLoading} />
      </AppContext.Provider>
    );
  }
}