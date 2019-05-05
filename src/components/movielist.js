import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import movieDB from "../lib/MovieDBApi";
import DisplayMovieAvg from "./displaymovieavg";

@observer
class Movielist extends Component {
  handleClick = id => {
    this.props.store.fetchMovie(id);
  };

  render() {
    let movies = [];
    if (this.props.type === "trending") {
      movies = this.props.store.movieList;
    }
    if (this.props.type === "search") {
      movies = this.props.store.searchResults;
    }
    if (this.props.type === "history") {
      this.props.store.purgeHistory();
      movies = this.props.store.movieHistory;
    }

    // actual movie items
    const movieItems = movies.map(movie => {
      return (
        <div
          key={movie.id}
          className="mb2 w-100 flex items-center bb b--red"
          onClick={() => this.handleClick(movie.id)}
        >
          <Link to={`/movie/${movie.id}`}>
            <img
              src={`${movieDB.imageBaseUrl}w185${movie.backdrop_path}`}
              alt={movie.title}
            />
          </Link>
          <div className="w-80 pl4">
            <Link
              to={`/movie/${movie.id}`}
              className="link mv0 f2 hover-bg-red bg-light-gray animate dark-red b hover-white pa1"
            >
              {movie.title || movie.name}
            </Link>
          </div>
          <div className="w-10 flex flex-column items-center">
            <h6 className="mt0 mb2 tc">USER RATING</h6>
            <DisplayMovieAvg value={movie.vote_average} />
          </div>
        </div>
      );
    });

    if (movies) {
      return <div className="pa0">{movieItems}</div>;
    }
    return <div>WAITING FOR MOVIELIST...</div>;
  }
}

export default Movielist;
