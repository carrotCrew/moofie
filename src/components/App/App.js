import React, { Component } from "react";
import "./App.css";
//FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
//Components
import Header from "../Header/Header";
import MoviesList from "../MoviesList/MoviesList";
//import MovieDetails from "../MovieDetails/MovieDetails";

library.add(faSearch, faAngleDoubleRight);

class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Header />
        <main className="content-wrapper">
          <MoviesList />
        </main>
      </div>
    );
  }
}

export default App;
