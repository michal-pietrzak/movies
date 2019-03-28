import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

@observer
class Navigation extends Component {
  handleSearchSubmit = e => {
    this.props.history.push(`/search?query=${this.props.store.query}`);
    e.preventDefault();
  };

  handleChange = e => {
    this.props.store.setQuery(e.target.value);
  };

  render() {
    return (
      <div>
        <nav className="ph3 ph5-ns pv4">
          <div className="">
            <Link
              to="/"
              className="link gray f5 f4-ns dib mr3 fl hover-bg-light-gray"
            >
              Home
            </Link>
            <Link
              to="/genres"
              className="link gray f5 f4-ns dib fl mr3 hover-bg-light-gray"
            >
              Genres
            </Link>
            <form
              method="GET"
              action="/search"
              onSubmit={this.handleSearchSubmit}
              className="fr"
            >
              <input
                type="text"
                name="query"
                value={this.props.store.query}
                onChange={this.handleChange}
                className="mr2 ba br2 b--light-gray"
              />
              <input
                type="submit"
                value="Search"
                className="f6 ttu br-pill ba bw1 ph3 pv1 gray hover-bg-light-gray pointer shadow-3 b"
              />
            </form>
          </div>
        </nav>
        <hr />
      </div>
    );
  }
}

export default Navigation;
