import React, { Component } from "react";
import { observer } from "mobx-react";
import movieDB from "../lib/MovieDBApi";

@observer
class Person extends Component {
  render() {
    const {
      id,
      name,
      biography,
      profile_path
    } = this.props.store.currentPerson;
    const { id: personId } = this.props.match.params;
    if (id) {
      return (
        <div className="pa4 flex">
          <div className="w-40">
            <img
              src={`${movieDB.imageBaseUrl}w500${profile_path}`}
              alt={`${name}`}
              className="w-100"
            />
          </div>
          <div className="pl4 tl">
            <h1 className="mt0 lh-title">{name}</h1>
            <p className="measure-wide f5 lh-copy athelas mb5">{biography}</p>
          </div>
        </div>
      );
    }
    if (!id) this.props.store.fetchPerson(personId);
    return <div>NO PERSON FETCHED</div>;
  }
}

export default Person;
