import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RepoCard extends Component {

  render() {
    return (
      <div className="cp_RepoCard">
        <h2 className="cp_RepoCard__title">{this.props.name}</h2>
        <a className="cp_RepoCard__link" href={this.props.url}>View repository</a>
      </div>
    );
  }
}

RepoCard.propTypes = {
  name: PropTypes.PropTypes.string.isRequired,
  url: PropTypes.PropTypes.string.isRequired
}

export default RepoCard;
