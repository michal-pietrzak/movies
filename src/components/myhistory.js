import React, { Component } from "react";
import { observer } from "mobx-react";
import Movielist from "./movielist";

@observer
class MyHistory extends Component {
  render() {
    const { movieHistory } = this.props.store;
    if (movieHistory.length > 0)
      return (
        <div className="ph3 ph5-ns">
          <div className="mb2 cf w-100 mb4">
            <h2 className="fl w-30 mv3">
              My viewing history {this.props.store.query}
            </h2>
            <div
              className="fr f6 mv3 ttu br-pill ba bw1 ph3 pv1 gray hover-bg-light-gray pointer shadow-3 b"
              onClick={() => this.props.store.sortMyHistoryByRating()}
            >
              Sort by rating
            </div>
          </div>
          <Movielist store={this.props.store} type={"history"} />
        </div>
      );
    return (
      <div className="dt vh-75 center">
        <div className="dtc dib v-mid f3">
          You haven't seen any movie details yet...
        </div>
      </div>
    );
  }
}

export default MyHistory;
