import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import getJSON from './modules/api';
import buildGithubAPIQuery from './modules/querybuilder';

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
      const repos = getJSON(buildGithubAPIQuery(this.state.username))
      .then(results => {
        this.setState({'queryresults': results});
      });

    } else {
      console.log('do nothing');
    }
  }

  handleSearchChange (username) {
    this.setState({'username': username});
  }

  render() {
    const results = this.state.queryresults;

    return (
      <div className="cp_App">
        <header className="cp_App__header">
          <Logo></Logo>
          <SearchForm onSearch={this.handleSearchSubmit} onChange={this.handleSearchChange} fieldTextPlaceholder={'Enter a username...'} />
        </header>
        <section className="cp_SearchResults ">
          {results.map((result) =>
            <p>{result.name}</p>
          )}
        </section>
      </div>
    );
  }
}

export default App;
