import React, { Component } from "react";
import Filters from "./Filters";

class Directory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentName: "",
      currentTitle: "",
      isIntern: false
    };
  }

  render() {
    return (
      <div>
        <h2>Company Directory</h2>
        <Filters
          currentName={this.state.currentName}
          currentTitle={this.state.currentTitle}
          isIntern={this.state.isIntern}
        />
      </div>
    );
  }
}

export default Directory;
