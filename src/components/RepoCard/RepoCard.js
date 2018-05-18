import React from 'react';
import PropTypes from 'prop-types';

function RepoCard(props) {
  return (
    <div className="cp_RepoCard">
      <h2 className="cp_RepoCard__title">{props.name}</h2>
      <a className="cp_RepoCard__link" href={props.url}>View repository</a>
    </div>
  );
}

RepoCard.propTypes = {
  name: PropTypes.PropTypes.string.isRequired,
  url: PropTypes.PropTypes.string.isRequired
}

export default RepoCard;
