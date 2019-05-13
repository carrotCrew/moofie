import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component{
render() {
    return (
      <footer className="footer">
        <div className="TMBD">
            <span>
                This product uses the TMDb API but is not endorsed or certified by TMDb.    
            </span>
            <img className="footer_logo" src="themoviedb.png" alt="TMDB" />
        </div>
        <br/>
        <p>
            &copy; 2019 Projekt realizowany w ramach kursu: <a href="https://coderscamp.pl/"> Coderscamp.pl </a>
        </p>
      </footer>
    );
  }
}

  export default Footer;