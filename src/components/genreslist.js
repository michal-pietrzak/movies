import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class GenresList extends Component {
  componentDidMount() {
    this.props.store.fetchGenres();
  }

  render() {
    if (this.props.store.genresList.length !== 0) {
      return (
        <div className="ph3 ph5-ns">
          <div className="mb2 cf w-100 mb4">
            <h2 className="fl w-20 mv3">Genres</h2>
            <div
              className="fr f6 mv3 ttu br-pill ba bw1 ph3 pv1 gray hover-bg-light-gray pointer grow shadow-3 b"
              onClick={() => this.props.store.sortMoviesByRating()}
            >
              Sort by rating
            </div>
          </div>
          <div>
            {this.props.store.genresList.map(genre => {
              return (
                <div className="fl f5 mv3 mr2 ttu br-pill ba bw1 ph3 pv1 gray hover-bg-light-gray pointer shadow-3 b">
                  {genre.name}
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    return <div className="ph3 ph5-ns">Getting the genres man</div>;
  }
}

export default GenresList;
