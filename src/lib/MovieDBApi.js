const axios = require("axios");

const CONFIG = {
  apiKey: "9879eebf10fe9f93d1de5ef55b25ad43",
  apiBaseUrl: "http://api.themoviedb.org/3/",
  imageBaseUrl: "http://image.tmdb.org/t/p/",
  timeout: 5000,
  language: "en-US"
};

class MovieDBApi {
  constructor({ apiKey, apiBaseUrl, imageBaseUrl, timeout }) {
    this.dataApi = axios.create({
      baseURL: apiBaseUrl,
      timeout
    });
    this.apiKey = apiKey;
    this.imageBaseUrl = imageBaseUrl;
  }

  async getMovieById(id) {
    const { data } = await this.dataApi.get(
      `/movie/${id}?api_key=${this.apiKey}`
    );
    return data;
  }

  async getPersonById(id) {
    const { data } = await this.dataApi.get(
      `/person/${id}?api_key=${this.apiKey}`
    );
    return data;
  }

  async getTrendingMovies() {
    const { data } = await this.dataApi.get(
      `/trending/movie/day?api_key=${this.apiKey}`
    );
    return data.results;
  }

  async getMovieCredits(id) {
    const { data } = await this.dataApi.get(
      `/movie/${id}/credits?api_key=${this.apiKey}`
    );
    return data;
  }

  async getSearchResults(query) {
    const { data } = await this.dataApi.get(
      `/search/movie?api_key=${this.apiKey}&query=${query}`
    );
    return data.results;
  }

  async getGenresList() {
    const { data } = await this.dataApi.get(
      `/genre/movie/list?api_key=${this.apiKey}`
    );
    return data.genres;
  }
}

// below - the true equivalent of export default
// module.exports = { default: new MovieDBApi(CONFIG) };
export default new MovieDBApi(CONFIG);
