import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import { Route } from 'react-router-dom';

import Header from './components/cabecera/Header';
import Menu from './components/cabecera/Menu';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <Header />
        </header>
        <Menu />
        <switch>
          <Route exact path="/" component={Main} />
        </switch>
      </div>
    );
  }
}

export default App;
