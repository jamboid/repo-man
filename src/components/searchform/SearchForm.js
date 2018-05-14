import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSearch();
  }

  handleChange(event) {
    event.preventDefault();
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <form className="cp_SearchForm fx_Group" onSubmit={this.handleSubmit}>
        <input className="cp_SearchForm__text" name="searchTerm" onChange={this.handleChange} placeholder={this.props.fieldTextPlaceholder} type="search" />
        <input className="cp_SearchForm__button" type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchForm;
