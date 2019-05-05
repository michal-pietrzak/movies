import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import movieDB from "../lib/MovieDBApi";

@observer
class Movie extends Component {
  displayCrew = job => {
    const p = this.props.store.crewList.filter(
      person => person && person.job === job
    )[0];
    if (p) {
      return (
        <div>
          <span className="mb1 f6 tracked ttu db pl1">{p.job}</span>
          <span className="f5 mb3 db">
            <Link
              to={`/person/${p.id}`}
              onClick={() => this.props.store.fetchPerson(p.id)}
              className="link hover-bg-red animate red b hover-white pa1"
            >
              {p.name}
            </Link>
          </span>
        </div>
      );
    }
  };

  displayGenres = () => {
    const { genres } = this.props.store.currentMovie;
    if (genres.length > 0) {
      return genres.map(genre => (
        <span key={genre.id} className="ttu f6 mr2 mv3 gray">
          {genre.name}
        </span>
      ));
    }
    return <span>Getting the movie genres...</span>;
  };

  render() {
    const { id, title, overview, poster_path } = this.props.store.currentMovie;
    const { id: movieId } = this.props.match.params;
    if (id) {
      return (
        <div className="pa4 flex">
          <div className="w-40">
            <img
              src={`${movieDB.imageBaseUrl}w500${poster_path}`}
              alt={`${title}`}
              className="w-100"
            />
          </div>
          <div className="pl4 tl">
            <h1 className="mt0 lh-title">{title}</h1>
            <div className="mb4">{this.displayGenres()}</div>
            <p className="measure-wide f5 lh-copy athelas mb5">{overview}</p>
            <hr />
            <ul className="list pa0">
              <li>{this.displayCrew("Director")}</li>
              <li>{this.displayCrew("Music")}</li>
              <li>{this.displayCrew("Director of Photography")}</li>
            </ul>
          </div>
        </div>
      );
    }
    if (!id) {
      this.props.store.fetchMovie(movieId);
    }
    return <div>NO FILM FETCHED</div>;
  }
}

export default Movie;
