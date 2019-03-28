import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import movieDB from "../lib/MovieDBApi";

@observer
class Movielist extends Component {
  handleClick = id => {
    this.props.store.fetchMovie(id);
  };

  displayMovieAvg = value => {
    if (value === 0) value = "NR";
    else value = value.toFixed(1);
    let borderColor = "",
      textcolor = "";
    switch (true) {
      case value >= 8:
        borderColor = "b--dark-green ";
        textcolor = "light-green ";
        break;

      case value >= 6:
        borderColor = "b--blue ";
        textcolor = "light-blue ";
        break;

      case value >= 4.5:
        borderColor = "b--orange ";
        textcolor = "gold ";
        break;

      case value < 4.5:
        borderColor = "b--red ";
        textcolor = "washed-red ";
        break;

      default:
        borderColor = "b--gray ";
        textcolor = "light-gray ";
    }

    const cl = "br3 bw2 ba f5 b bg-black pa2 " + textcolor + borderColor;
    return <div className={cl}>{value}</div>;
  };

  render() {
    let movies = [];
    if (this.props.type === "trending") {
      movies = this.props.store.movieList;
    }
    if (this.props.type === "search") {
      movies = this.props.store.searchResults;
    }
    if (movies) {
      return (
        <div className="pa0">
          {movies.map(movie => {
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
                  {this.displayMovieAvg(movie.vote_average)}
                </div>
              </div>
            );
          })}
        </div>
      );
    }
    return <div>WAITING FOR MOVIELIST...</div>;
  }
}

export default Movielist;
