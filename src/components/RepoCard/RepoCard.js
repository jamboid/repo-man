import React from 'react';
import PropTypes from 'prop-types';

import './RepoCard.css';

function RepoCard(props) {
  return (
    <div className="cp_RepoCard">
      <div className="cp_RepoCard__details">
      <h2 className="cp_RepoCard__title">{props.name}</h2>
      <p className="cp_RepoCard__desc">{props.description}</p>
      <p>{props.stars} | {props.watchers}</p>
      <a className="cp_RepoCard__link" href={props.url} target="_blank">View repository</a>

    </div>
  );
}

RepoCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string.isRequired,
  stars: PropTypes.number,
  watchers: PropTypes.number
}

export default RepoCard;
