import React from "react";
import "./MoviesList.css";

import SingleMovie from "./SingleMovie/SingleMovie";

const MoviesList = () => {
  return (
    <section class="movies">
      <SingleMovie />
      <SingleMovie />
      <SingleMovie />
      <SingleMovie />
      <SingleMovie />
      <SingleMovie />
      <SingleMovie />
      <SingleMovie />
    </section>
  );
};

export default MoviesList;
