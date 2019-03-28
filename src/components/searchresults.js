import React, { Component } from "react";
import { observer } from "mobx-react";
import queryString from "query-string";
import Movielist from "./movielist";

@observer
class SearchResults extends Component {
  componentDidMount() {
    const { query } = queryString.parse(this.props.location.search);
    this.props.store.setQuery(query);
    this.props.store.fetchSearchResults();
  }

  render() {
    if (this.props.store.searchResults.length === 0)
      this.props.store.fetchSearchResults();
    if (this.props.store.searchResults) {
      return (
        <div className="ph3 ph5-ns">
          <div className="mb2 cf w-100 mb4">
            <h2 className="fl w-20 mv3">Search: {this.props.store.query}</h2>
            <div
              className="fr f6 mv3 ttu br-pill ba bw1 ph3 pv1 gray hover-bg-light-gray pointer grow shadow-3 b"
              onClick={() => this.props.store.sortSearchByRating()}
            >
              Sort by rating
            </div>
          </div>
          <Movielist store={this.props.store} type={"search"} />
        </div>
      );
    }
  }
}

export default SearchResults;
