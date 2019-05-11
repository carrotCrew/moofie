import React, { Component } from "react";
import themoviedb from '../../../api/themoviedb';
import getGenre from './getGenre';
import "./SingleMovie.css";
import MovieDetails from "../MovieDetails/MovieDetails";
import TicketBuy from "../TicketBuy/TicketBuy";

class SingleMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posterURL: '',
      genres: [],
      cast: [],
      director: []
    }
  }

  async componentDidMount() {
    const url = `https://image.tmdb.org/t/p/w342${this.props.movie.poster_path}`;
    const genresToAdd = await getGenre(this.props.movie.genre_ids, this.props.genresArr);
    this.setState({ posterURL: url, genres: await genresToAdd });

    themoviedb.get(`movie/${this.props.movie.id}/credits?`)
      .then(resp => {
        const director = resp.data.crew.filter(p => p.job === "Director").map(p => p.name).join(', ');
        const cast = resp.data.cast.slice(0, 3).map(p => p.name).join(', ');
        this.setState({ cast: cast, director: director });
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <article className="movie" style={{ background: `rgb(0,0,0,.7) url(${this.state.posterURL}) no-repeat center`}}>
        <header className="movie__header">
          <div>
            <span className="movie__title">{this.props.movie.title} </span>
            <span className="movie__year">(2019)</span>
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
          <TicketBuy name="movie__buy"/>
          <MovieDetails />
        </div>
      </article>
    );
  }
}

export default SingleMovie;
