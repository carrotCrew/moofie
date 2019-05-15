import React from "react";
import Popup from "reactjs-popup";
import "./MovieDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MovieDetails extends React.Component {
  render() {
    return (
      <Popup
        trigger={
          <button className="movie__details">
            More details
            <FontAwesomeIcon
              icon="angle-double-right"
              className="movie__icon"
            />
          </button>
        }
        modal
      >
        {close => (
          <div className="modal">
            <div className="header">
              {this.props.title} ({this.props.year})
            </div>

            <div className="about">
              <div className="sidebar">
                <img className="img1" src={this.props.poster} alt="poster" />
              </div>
              <div className="content">
                <p>
                  <span className="info__title">Release date:</span>
                  <span className="info__date">{this.props.release}</span>
                </p>
                <p>
                  <span className="info__title">Genre:</span>
                  <span className="info__genre">{this.props.genres}</span>
                </p>
                <p>
                  <span className="info__title">Cast:</span>
                  <span className="info__cast">{this.props.cast}</span>
                </p>
                <p>
                  <span className="info__title">Director:</span>
                  <span className="info__director">{this.props.director}</span>
                </p>
                <p className="overview">{this.props.overview}</p>
              </div>
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
            </div>
          </div>
        )}
      </Popup>
    );
  }
}

export default MovieDetails;
