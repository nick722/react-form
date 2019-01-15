import React, { Component } from "react";
import Limiters from "./Limiters";

class Search extends Component {
  state = {
    query: "",
    peerReviewed: false,
    fullTextLimiter: ""
  };

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

  updatefullTextLimiter = e => {
    this.changeHandler("fullTextLimiter", e.target.value);
  };

  render() {
    return (
      <form>
        <input type="text" onChange={this.updateQuery} />
        <button>Submit</button>

        <Limiters
          onChangeCheckbox={this.updatePeerReviewed}
          onChangeRadio={this.updatefullTextLimiter}
        />
      </form>
    );
  }
}

export default Search;
