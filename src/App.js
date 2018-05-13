import React, { Component } from 'react';
import SearchForm from './components/searchform';
//import get from './modules/api';
import logo from './logo.svg';
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">App that lets you enter a Github username <br />and displays the list of associated repos</h1>
          <p>Uses the Github REST API</p>
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
