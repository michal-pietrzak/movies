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
}

// below - the true equivalent of export default
// module.exports = { default: new MovieDBApi(CONFIG) };
export default new MovieDBApi(CONFIG);
