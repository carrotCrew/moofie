import React, { Component } from "react";
import "./SingleMovie.css";
import MovieDetails from "../MovieDetails/MovieDetails";
import TicketBuy from "../TicketBuy/TicketBuy";

class SingleMovie extends Component {
  render() {
    return (
      <article className="movie">
        <header className="movie__header">
          <div>
            <span className="movie__title">Avengers: Koniec gry</span>
            <span className="movie__year">(2019)</span>
          </div>
        </header>
        <div className="movie__info">
          <p>
            <span className="info__title">Release date:</span>
            <span className="info__date">2019-04-22</span>
          </p>
          <p>
            <span className="info__title">Genre:</span>
            <span className="info__genre">Adventure, Fantasy</span>
          </p>
          <p>
            <span className="info__title">Cast:</span>
            <span className="info__cast">Famous people</span>
          </p>
          <p>
            <span className="info__title">Director:</span>
            <span className="info__director">Famous person</span>
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
