import React, { Component } from "react";
import Limiters from "./Limiters";

class Search extends Component {
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
    this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
    this.onChangeRadio = this.onChangeRadio.bind(this);
  }

  state = {
    query: "",
    peerReviewed: false,
    fullTextLimiter: ""
  };

  limiters = [
    {
      label: "Peer Reviewed",
      name: "peerReviewed",
      type: "checkbox",
      value: "peerReviewed",
      onChange: this.onChangeCheckbox
    },
    {
      label: "At My Library",
      name: "fullTextLimiter",
      type: "radio",
      value: "AtMyLibrary",
      onChange: this.onChangeRadio
    },
    {
      label: "Read online",
      name: "fullTextLimiter",
      type: "radio",
      value: "readOnline",
      onChange: this.onChangeRadio
    }
  ];

  changeHandler(name, value) {
    this.setState({
      [name]: value
    });
  }

  updateQuery(e) {
    this.changeHandler("query", e.target.value);
  }

  onChangeCheckbox(e) {
    this.changeHandler("peerReviewed", e.target.checked);
  }

  onChangeRadio(e) {
    this.changeHandler("fullTextLimiter", e.target.value);
  }

  render() {
    return (
      <form>
        <input type="text" onChange={this.updateQuery} />
        <button>Submit</button>

        <Limiters
          limiters={this.limiters}
          onChangeCheckbox={this.updatePeerReviewed}
          onChangeRadio={this.updateFullTextLimiter}
        />
      </form>
    );
  }
}

export default Search;
