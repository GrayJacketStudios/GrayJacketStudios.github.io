import React, { Component } from 'react';
import './css/App.css';
import { Route, Switch } from 'react-router-dom';

import Header from './components/cabecera/Header';
import Menu from './components/cabecera/Menu';
import Main from './components/Main';

import NotFound from './components/errores/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <Header />
        </header>
        <Menu />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
