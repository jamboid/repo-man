import React, { Component } from 'react';

class SearchForm extends Component {

  render() {
    return (
      <form class="cp_SearchForm">
        <input type="search" />
        <input type="submit" value="Search" />
      </form>
    );
  }

}

export default SearchForm;
