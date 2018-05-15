import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ResultsList.css';

class ResultsList extends Component {
  render() {
    return (
      <div className="cp_ResultsList">
        {this.props.results.map((repo) =>
          <p key={repo.id}>{repo.name}</p>
        )}
      </div>
    );
  }
}

ResultsList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ResultsList;
