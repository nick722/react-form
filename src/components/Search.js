import React, { Component } from "react";
import Limiters from "./Limiters";

class Search extends Component {
  state = {
    query: "",
    peerReviewed: false,
    fullTextLimiter: ""
  };

  limiters = [
    {
      label: "Peer Reviewed!",
      name: "peerReviewed",
      type: "checkbox",
      value: "peerReviewed",
      onChange: "onChangeCheckbox"
    },
    {
      label: "At My Library!",
      name: "AtMyLibrary",
      type: "radio",
      value: "AtMyLibrary",
      onChange: "onChangeRadio"
    },
    {
      label: "Read online!",
      name: "readOnline",
      type: "radio",
      value: "readOnline",
      onChange: "onChangeRadio"
    }
  ];

  changeHandler(name, value) {
    this.setState({
      [name]: value
    });
  }

  updateQuery = e => {
    this.changeHandler("query", e.target.value);
  };

  updatePeerReviewed = e => {
    this.changeHandler("peerReviewed", e.target.checked);
  };

  updateFullTextLimiter = e => {
    this.changeHandler("fullTextLimiter", e.target.value);
  };

  render() {
    return (
      <form>
        <input type="text" onChange={this.updateQuery} />
        <button>Submit</button>

        <Limiters
          onChangeCheckbox={this.updatePeerReviewed}
          onChangeRadio={this.updateFullTextLimiter}
        />
      </form>
    );
  }
}

export default Search;
