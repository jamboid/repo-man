import React, { Component } from 'react';

import RepoCard from '../RepoCard'

import './ResultsList.css';

class ResultsList extends Component {

  render() {
    return (
      <section className="cp_ResultsList">
        {this.props.results.map((repo) =>
          <RepoCard key={repo.id} name={repo.name} description={repo.description} url={repo.url} stars={repo.stars} watchers={repo.watchers} />
        )}
      </section>
    );
  }
}

ResultsList.defaultProps = {
    results: []
}

export default ResultsList;
