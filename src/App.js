import React, { Component } from 'react';
import get from './modules/api';
import buildGithubAPIQuery from './modules/querybuilder';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      mode: 'loading',
      queryresults: ''
    };
  }

  componentDidMount() {
    const queryResult = get(buildGithubAPIQuery('jamboid'));
    this.setState((prevState) => {
      return {
        queryresults: queryResult
      };
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">App that lets you enter a Github username <br />and displays the list of associated repos</h1>
          <p>Uses the Github REST API</p>
          <p>{ this.state.queryresults }</p>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
