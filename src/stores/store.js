import { observable, action } from "mobx";
import movieDB from "../lib/MovieDBApi";

class Store {
  constructor(movieDB) {
    this.movieDB = movieDB;
  }

  @observable currentMovie = {};
  @observable currentPerson = {};
  @observable movieList = [];
  @observable movieHistory = [];
  @observable crewList = [];
  @observable castList = [];
  @observable query = "";
  @observable searchResults = [];
  @observable genresList = [];

  @action
  fetchMovie(id) {
    movieDB.getMovieById(id).then(movie => {
      this.currentMovie = movie;
      this.movieHistory.push(movie);
    });
    movieDB.getMovieCredits(id).then(credits => {
      this.crewList = credits.crew;
      this.castList = credits.cast;
    });
  }

  @action
  fetchPerson(id) {
    movieDB.getPersonById(id).then(person => {
      this.currentPerson = person;
    });
  }

  @action
  fetchTrending() {
    movieDB.getTrendingMovies().then(filmlist => {
      this.movieList = filmlist;
    });
  }

  @action
  sortMoviesByRating() {
    const compare = (a, b) => {
      if (a.vote_average > b.vote_average) return -1;
      if (a.vote_average < b.vote_average) return 1;
      return 0;
    };
    const sorted = this.movieList.sort(compare);
    this.movieList = sorted;
  }

  @action
  sortSearchByRating() {
    const compare = (a, b) => {
      if (a.vote_average > b.vote_average) return -1;
      if (a.vote_average < b.vote_average) return 1;
      return 0;
    };
    const sorted = this.searchResults.sort(compare);
    this.searchResults = sorted;
  }

  @action
  setQuery(query) {
    this.query = query;
  }

  @action
  fetchSearchResults() {
    movieDB.getSearchResults(this.query).then(results => {
      this.searchResults = results;
    });
  }

  @action
  fetchGenres() {
    movieDB.getGenresList().then(genres => {
      this.genresList = genres;
    });
  }
}

export default new Store(movieDB);

// movie id: 400650
