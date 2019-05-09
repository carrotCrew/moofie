import React, { Component } from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchBar extends Component {

  handleInputChange = e => {
    const searchTerm = e.target.value;
    this.props.callbackHeader(searchTerm);
  }

  handleInputSubmit = e => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="search-bar">
        <form className="search-bar__form" onSubmit={this.handleInputSubmit}>
          <div className="search-bar__wrapper">
            <FontAwesomeIcon icon="search" className="search-bar__icon" />
            <input
              onChange = {this.handleInputChange}
              className="search-bar__input"
              type="text"
              id="title"
              placeholder="Search by title"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
