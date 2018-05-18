import React from 'react';
import PropTypes from 'prop-types';

import './RepoCard.css';

function RepoCard(props) {
  return (
    <div className="cp_RepoCard">
      <h2 className="cp_RepoCard__title">{props.name}</h2>
      <p className="cp_RepoCard__desc">{props.description}</p>
      <a className="cp_RepoCard__link" href={props.url} target="_blank">View repository</a>
    </div>
  );
}

RepoCard.propTypes = {
  name: PropTypes.PropTypes.string.isRequired,
  url: PropTypes.PropTypes.string.isRequired
}

export default RepoCard;
