import React from "react";
import "./MoviesList.css";

import SingleMovie from "./SingleMovie/SingleMovie";

class MoviesList extends React.Component {
  findMovie = (nowPlayed, searchTerm) => {
    const allMovies = nowPlayed;
    const allTitles = allMovies.map(m => m.title);
    const regex = new RegExp(searchTerm, "gi");
    const matchedTitles = allTitles.filter(t => t.match(regex));
    return allMovies.filter(m => matchedTitles.includes(m.title));
  };

  render() {
    if (this.props.searchTerm !== "") {
      const foundedMovies = this.findMovie(
        this.props.movies,
        this.props.searchTerm
      );
      return (
        <section className="movies">
          {foundedMovies.map(m => (
            <SingleMovie
              movie={m}
              key={m.id}
              genresArr={this.props.genresArr}
            />
          ))}
        </section>
      );
    } else {
      return (
        <section className="movies">
          {this.props.movies.map(m => (
            <SingleMovie
              movie={m}
              key={m.id}
              genresArr={this.props.genresArr}
            />
          ))}
        </section>
      );
    }
  }
}

export default MoviesList;
