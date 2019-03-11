import React, { Component } from "react";
import "./App.css";
import store from "./stores/store";
import Movie from "./components/movie";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie store={store} />
      </div>
    );
  }
}

export default App;
