import React, { Component } from "react";
import themoviedb from "../../../api/themoviedb";
import getGenre from "./getGenre";
import "./SingleMovie.css";
import MovieDetails from "../MovieDetails/MovieDetails";
import TicketBuy from "../TicketBuy/TicketBuy";

class SingleMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posterURL: "",
      genres: [],
      cast: [],
      director: []
    };
  }

  componentDidMount() {
    this.genresToRender();

    const url = `https://image.tmdb.org/t/p/w342${
      this.props.movie.poster_path
    }`;

    this.setState({ posterURL: url });

    themoviedb
      .get(`movie/${this.props.movie.id}/credits?`)
      .then(resp => {
        const director = resp.data.crew
          .filter(p => p.job === "Director")
          .map(p => p.name)
          .join(", ");
        const cast = resp.data.cast
          .slice(0, 3)
          .map(p => p.name)
          .join(", ");
        this.setState({ cast: cast, director: director });
      })
      .catch(err => console.log(err));
  }

  genresToRender = async () => {
    try {
      const genresToAdd = await getGenre(
        this.props.movie.genre_ids,
        this.props.genresArr
      );
      this.setState({ genres: genresToAdd });
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      <article
        className="movie"
        style={{
          background: `rgb(0,0,0,.7) url(${
            this.state.posterURL
          }) no-repeat center`
        }}
      >
        <header className="movie__header">
          <div>
            <span className="movie__title">{this.props.movie.title} </span>
            <span className="movie__year">
              ({this.props.movie.release_date.slice(0, 4)})
            </span>
          </div>
        </header>
        <div className="movie__info">
          <p>
            <span className="info__title">Release date:</span>
            <span className="info__date">{this.props.movie.release_date}</span>
          </p>
          <p>
            <span className="info__title">Genre:</span>
            <span className="info__genre">{this.state.genres}</span>
          </p>
          <p>
            <span className="info__title">Cast:</span>
            <span className="info__cast">{this.state.cast}</span>
          </p>
          <p>
            <span className="info__title">Director:</span>
            <span className="info__director">{this.state.director}</span>
          </p>
        </div>
        <div className="movie__actions">
          <TicketBuy name="movie__buy" title={this.props.movie.title} />
          <MovieDetails
            title={this.props.movie.title}
            release={this.props.movie.release_date}
            year={this.props.movie.release_date.slice(0, 4)}
            genres={this.state.genres}
            cast={this.state.cast}
            director={this.state.director}
            overview={this.props.movie.overview}
            poster={this.state.posterURL}
          />
        </div>
      </article>
    );
  }
}

export default SingleMovie;
