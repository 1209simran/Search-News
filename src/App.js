import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import SearchForm from "./Components/SearchForm";
import List from "./Components/List";
import img from "./logo-hn-search.webp";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
      loading: true
    };
  }

  componentDidMount() {
    this.Search();
  }

  Search = (query = "Title") => {
    axios
      .get(`https://hn.algolia.com/api/v1/search?query=${query}`)
      .then(response => {
        this.setState({
          query: query,
          news: response.data.hits,
          loading: false
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  };

  render() {
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">
              <img
                src={img}
                style={{ height: "55px", width: "55px", marginBottom: "-18px" }}
              />
              Search Hacker News
            </h1>
            <SearchForm onSearch={this.Search} />
          </div>
        </div>
        <div className="main-content">
          {this.state.loading ? (
            <p>Loading...</p>
          ) : (
            <div>
              <h2>{this.state.query}</h2>
              <List data={this.state.news} />
            </div>
          )}
        </div>
      </div>
    );
  }
}
