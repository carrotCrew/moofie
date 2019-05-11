import React from "react";
import Popup from "reactjs-popup";
import "./MovieDetails.css";
import TicketBuy from "../TicketBuy/TicketBuy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieDetails = () => (
  <Popup
    trigger={
      <button className="movie__details">
        More details
        <FontAwesomeIcon icon="angle-double-right" className="movie__icon" />
      </button>
    }
    modal
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Avengers: Koniec gry </div>

        <div className="content">
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
          <p>
            <br />
            Po wymazaniu połowy życia we Wszechświecie przez Thanosa, Avengersi
            starają się zrobić wszystko co konieczne, aby pokonać szalonego
            tytana.
          </p>
        </div>
        <div class="siderbar">
          <img
            className="img1"
            src="https://ssl-gfx.filmweb.pl/po/05/42/790542/7881430.6.jpg"
            alt="plakat - Avengers: Koniec gry (2019)"
          />
        </div>

        <div className="actions">
          <button
            className="button1"
            onClick={() => {
              close();
            }}
          >
            Close
          </button>

          <TicketBuy name="button1" />
        </div>
      </div>
    )}
  </Popup>
);

export default MovieDetails;
