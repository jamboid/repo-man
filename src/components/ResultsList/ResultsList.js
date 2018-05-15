import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ResultsList.css';

class ResultsList extends Component {
  render() {
    return (
      <section className="cp_ResultsList">
        {this.props.results.map((repo) =>
          <p key={repo.id}><a href={repo.url}>{repo.name}</a></p>
        )}
      </section>
    );
  }
}

ResultsList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ResultsList;
