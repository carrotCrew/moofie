import React, { Component } from "react";
import "./Header.css";

import SearchBar from "../SearchBar/SearchBar";

class Header extends Component {

  passSearchTerm = (searchTerm) => {
    const term = searchTerm;
    this.props.callbackApp(term);
  }

  render() {
    return (
      <header className="header">
        <img className="header__logo" src="logo.png" alt="Moofie" />
        <SearchBar callbackHeader={this.passSearchTerm}/>
      </header>
    );
  }
}

export default Header;
