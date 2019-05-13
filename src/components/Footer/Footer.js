import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component{
render() {
    return (
      <footer className="footer">

        <img className="footer_logo" src="themoviedb.png" alt="TMDB" />
            <p>
                This product uses the TMDb API but is not endorsed or certified by TMDb.
            </p>
        <p>
          <span>&copy; 2019</span> Projekt realizowany w ramach kursu <a href="https://coderscamp.pl/"> CodersCamp </a>
        </p>
      </footer>
    );
  }
}

  export default Footer;