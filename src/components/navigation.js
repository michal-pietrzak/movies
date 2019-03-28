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
        <nav className="ui fixed inverted menu">
          <Link to="/" className="active item">
            Home
          </Link>
          <Link to="/genres" className="item">
            Genres
          </Link>
          <div className="right menu">
            <form
              method="GET"
              action="/search"
              onSubmit={this.handleSearchSubmit}
              className="item"
            >
              <div className="ui action input">
                <input
                  type="text"
                  name="query"
                  value={this.props.store.query}
                  onChange={this.handleChange}
                  className=""
                />
                <button className="ui button" type="submit">
                  Search
                </button>
              </div>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
