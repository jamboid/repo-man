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
        <svg className="cp_RepoCard__starsIcon"  width="23" height="22" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 16.937L4.393 22l2.591-8.363L0 8.403l8.709-.105L11.5 0l2.791 8.298L23 8.403l-6.984 5.234L18.607 22z" fill="#FFCF00" fill-rule="evenodd"/></svg>
        <p className="cp_RepoCard__starsTotal">{props.stars}</p>
      </div>
      <a className="cp_RepoCard__link" href={props.url} target="_blank">
        <svg className="cp_RepoCard__linkIcon" width="36" height="35" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" stroke-width="5" fill="none" fill-rule="evenodd" stroke-linecap="round"><path stroke-linejoin="round" d="M17.718 2.567L32.542 17.39 17.719 32.213"/><path d="M29.916 17.567H2.659"/></g></svg>


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
