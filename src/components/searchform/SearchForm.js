import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {

  render() {
    return (
      <form class="cp_SearchForm">
        <input class="cp_SearchForm__text" type="search" />
        <input class="cp_SearchForm__button" type="submit" value="Search" />
      </form>
    );
  }

}

export default SearchForm;
