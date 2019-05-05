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

  compare(a, b) {
    if (a.vote_average > b.vote_average) return -1;
    if (a.vote_average < b.vote_average) return 1;
    return 0;
  }

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
    const sorted = this.movieList.sort(this.compare);
    this.movieList = sorted;
  }

  @action
  sortSearchByRating() {
    const sorted = this.searchResults.sort(this.compare);
    this.searchResults = sorted;
  }

  @action
  sortMyHistoryByRating() {
    const sorted = this.movieHistory.sort(this.compare);
    this.movieHistory = sorted;
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

  @action
  purgeHistory() {
    const movieIds = {};
    const purged = this.movieHistory.map(movie => {
      if (!movieIds[movie.id]) movieIds[movie.id] = 0;
      movieIds[movie.id]++;
      if (movieIds[movie.id] < 2) return movie;
      return null;
    });
    this.movieHistory = purged.filter(movie => movie);
  }
}

export default new Store(movieDB);

// movie id: 400650
