import React, { Component } from "react";
import "./Header.css";

import SearchBar from "../SearchBar/SearchBar";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img className="header__logo" src="logo.png" alt="Moofie" />
        <SearchBar />
      </header>
    );
  }
}

export default Header;
