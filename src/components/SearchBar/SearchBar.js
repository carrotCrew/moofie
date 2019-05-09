import React, { Component } from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <form className="search-bar__form">
          <div className="search-bar__wrapper">
            <FontAwesomeIcon icon="search" className="search-bar__icon" />
            <input
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
