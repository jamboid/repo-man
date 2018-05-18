import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RepoCard from '../RepoCard'

import './ResultsList.css';

class ResultsList extends Component {
  render() {
    return (
      <section className="cp_ResultsList">
        {this.props.results.map((repo) =>
          <RepoCard key={repo.id} name={repo.name} description={repo.description} url={repo.url} />
        )}
      </section>
    );
  }
}

ResultsList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ResultsList;
