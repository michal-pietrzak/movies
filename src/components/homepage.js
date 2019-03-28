import React, { Component } from "react";
import { observer } from "mobx-react";
import Movielist from "./movielist";

@observer
class Homepage extends Component {
  componentDidMount() {
    this.props.store.fetchTrending();
  }

  render() {
    return (
      <div className="ui container">
        <div className="mb2 cf w-100 mb4">
          <h2 className="fl w-20 mv3">Trending Films</h2>
          <div
            className="fr f6 mv3 ttu br-pill ba bw1 ph3 pv1 gray hover-bg-light-gray pointer grow shadow-3 b"
            onClick={() => this.props.store.sortMoviesByRating()}
          >
            Sort by rating
          </div>
        </div>
        <Movielist store={this.props.store} type={"trending"} />
      </div>
    );
  }
}

export default Homepage;
