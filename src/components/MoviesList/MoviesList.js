import React from "react";
import "./MoviesList.css";

import SingleMovie from "./SingleMovie/SingleMovie";

class MoviesList extends React.Component {
  render() {
    return (
      <section className="movies">
        {this.props.movies.map(m => <SingleMovie movie={m} key={m.id} genresArr={this.props.genresArr} />)}
      </section>
      )
  }
};

export default MoviesList;
