import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class ListContainer extends Component {
  render() {
    return (
      <div className="ph3 ph5-ns">
        <div className="mb2 cf w-100 mb4">
          <h2 className="fl w-20 mv3">Trending Films</h2>
          <div
            className="fr f6 mv3 ttu br-pill ba bw1 ph3 pv1 gray hover-bg-light-gray pointer grow shadow-3 b"
            onClick={() => this.props.store.sortMoviesByRating()}
          >
            Sort by rating
          </div>
        </div>
        {this.props.list}
      </div>
    );
  }
}

export default ListContainer;
