import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import ResultsList from './components/ResultsList';
import getJSON from './modules/API';
import buildGithubAPIQuery from './modules/QueryBuilder';

//import get from './modules/api';
import Logo from './components/Logo';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      mode: 'start',
      username: '',
      queryresults: []
    };

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchSubmit () {
    //this.setState({'username': username})
    if(this.state.username !== '') {
      console.log('start search...');
      getJSON(buildGithubAPIQuery(this.state.username))
      .then(results => {
        this.setState({'queryresults': results});
      })
      .catch((err) => {
        console.log(err);
      });

    } else {
      // console.log('do nothing');
      this.setState({'queryresults': []});
    }
  }

  handleSearchChange (username) {
    this.setState({'username': username});
  }

  render() {
    return (
      <div className="cp_App">
        <header className="cp_App__header">
          <Logo />
          
          <SearchForm onSearch={this.handleSearchSubmit} onChange={this.handleSearchChange} fieldTextPlaceholder={'Enter a username...'} />
        </header>
        <ResultsList results={this.state.queryresults} />
      </div>
    );
  }
}

export default App;
