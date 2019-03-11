import React, { Component } from "react";
import { observer } from "mobx-react";
import movieDB from "../lib/MovieDBApi";

@observer
class Movie extends Component {
  render() {
    const { title, overview, poster_path } = this.props.store.currentMovie;
    return (
      <div>
        <img
          src={`${movieDB.imageBaseUrl}w500${poster_path}`}
          alt={`${title}`}
        />
        <h1>{title}</h1>
        <h3>{overview}</h3>
      </div>
    );
  }
}

export default Movie;
