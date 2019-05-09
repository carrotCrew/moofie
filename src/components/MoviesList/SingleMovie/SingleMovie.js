import React, { Component } from "react";
import "./SingleMovie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          <button className="movie__buy">Buy tickets</button>
          <button className="movie__details">
            More details
            <FontAwesomeIcon
              icon="angle-double-right"
              className="movie__icon"
            />
          </button>
        </div>
      </article>
    );
  }
}

export default SingleMovie;
