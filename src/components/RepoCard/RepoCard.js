import React from 'react';
import PropTypes from 'prop-types';
import star from '../../assets/img/star_icon.svg'
import arrow from '../../assets/img/arrow_icon_white.svg'

import './RepoCard.css';

function RepoCard(props) {
  return (
    <div className="cp_RepoCard">
      <div className="cp_RepoCard__details">
        <h2 className="cp_RepoCard__title">{props.name}</h2>
        <p className="cp_RepoCard__desc">{props.description}</p>
      </div>
      <div className="cp_RepoCard__stars">
        <img className="cp_RepoCard__starsIcon" src={star} />
        <p className="cp_RepoCard__starsTotal">{props.stars}</p>
      </div>
      <a className="cp_RepoCard__link" href={props.url} target="_blank">
        <img className="cp_RepoCard__linkIcon" src={arrow} />
      </a>

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
