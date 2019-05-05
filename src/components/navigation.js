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
      <nav className="dt w-100 border-box ph5-ns bg-near-white">
        <Link
          to="/"
          className="link f5 b v-mid dib mr3 hover-red pv3 br b--white pr3"
        >
          Home
        </Link>
        <Link to="/myhistory" className="link f5 b dib mr3 hover-red pv3">
          My History
        </Link>

        <form
          method="GET"
          action="/search"
          onSubmit={this.handleSearchSubmit}
          className="dtc v-mid w-50 tr"
        >
          <input
            type="text"
            name="query"
            value={this.props.store.query}
            onChange={this.handleChange}
            className="mr2 br2 bw0 h2"
          />
          <button className="br2 b--white h2 ph3" type="submit">
            Search
          </button>
        </form>
      </nav>
    );
  }
}

export default Navigation;
