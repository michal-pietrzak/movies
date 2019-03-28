import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import "./App.css";
import store from "./stores/store";
import Movie from "./components/movie";
import Person from "./components/person";
import Homepage from "./components/homepage";
import Navigation from "./components/navigation";
import SearchResults from "./components/searchresults";
import GenresList from "./components/genreslist";

// const routes = [
//   {
//     path: "/",
//     component: Homepage
//   },
//   {
//     path: "/movie/:id",
//     component: Movie
//   }
// ];

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="ui container">
          <Navigation store={store} />
          <Switch>
            <Route exact path="/" render={() => <Homepage store={store} />} />
            <Route
              exact
              path="/movie/:id"
              render={props => <Movie {...props} store={store} />}
            />
            <Route
              path="/person/:id"
              render={props => <Person {...props} store={store} />}
            />
            <Route
              path="/search"
              render={props => <SearchResults {...props} store={store} />}
            />
            <Route
              path="/genres"
              render={props => <GenresList store={store} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// <Movie store={store} />
