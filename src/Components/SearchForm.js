import React, { Component } from "react";

export default class SearchForm extends Component {
  state = {
    searchText: ""
  };

  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="search-form form" onSubmit={this.handleSubmit}>
        <label className="is-hidden" htmlFor="search">
          Search
        </label>
        <input
          className="form"
          type="search"
          onChange={this.onSearchChange}
          name="search"
          ref={input => (this.query = input)}
          placeholder="Search stories by title"
        />
      </form>
    );
  }
}
