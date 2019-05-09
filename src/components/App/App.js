import React, { Component } from "react";
import "./App.css";
// axios
import themoviedb from '../../api/themoviedb';
//FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
//Components
import Header from "../Header/Header";
import MoviesList from "../MoviesList/MoviesList";

library.add(faSearch, faAngleDoubleRight);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      genresArr: [],
      searchTerm: ''
    };
  }

  componentWillMount() {
    themoviedb.get(`movie/now_playing?api_key=4cfa00f017abc0bfb0633f700edde6da&language=en&page=1`)
      .then(resp => this.setState({ movies: resp.data.results }))
      .catch(err => console.log(err));

    themoviedb.get(`genre/movie/list?api_key=4cfa00f017abc0bfb0633f700edde6da&language=en`)
      .then(resp => this.setState({ genresArr: resp.data.genres }))
      .catch(err => console.log(err));
  }

  passSearchTerm = (searchTerm) => {
    const term = searchTerm;
    this.setState({ searchTerm: term});
  }

  render() {
    return (
      <div className="page-wrapper">
        <Header callbackApp={this.passSearchTerm}/>
        <main className="content-wrapper">
          <MoviesList movies={this.state.movies} genresArr={this.state.genresArr} searchTerm={this.state.searchTerm}/>
        </main>
      </div>
    );
  }
}

export default App;
