import { observable } from "mobx";
import movieDB from "../lib/MovieDBApi";

class Store {
  constructor(movieDB) {
    this.movieDB = movieDB;
  }

  @observable currentMovie = {};
}

export default new Store(movieDB);

// movie id: 400650
