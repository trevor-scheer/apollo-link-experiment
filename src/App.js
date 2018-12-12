import React, {Component} from 'react';
import {ApolloProvider} from 'react-apollo';
import logo from './logo.svg';
import {MainPage} from './components/MainPage';
import {client} from './apollo/client';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ApolloProvider client={client}>
            <MainPage />
          </ApolloProvider>
        </header>
      </div>
    );
  }
}

export default App;
