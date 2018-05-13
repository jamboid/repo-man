import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
//import get from './modules/api';
import Logo from './components/Logo';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      mode: 'loading',
      queryresults: {}
    };
  }

  render() {
    return (
      <div className="cp_App">
        <header className="cp_App__header">
          <Logo></Logo>
          <SearchForm></SearchForm>

          <p>{ this.state.queryresults.length } repos</p>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SearchForm></SearchForm>
      </div>
    );
  }
}

export default App;
