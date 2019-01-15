import React, { Component } from "react";

function Limiters({ onChangeCheckbox, onChangeRadio }) {
  return (
    <div>
      <label>
        <input type="checkbox" onChange={onChangeCheckbox} />
        Peer Reviewed
      </label>
      <label>
        <input
          type="radio"
          name="fullTextLimiters"
          value="readOnline"
          onChange={onChangeRadio}
        />
        Read online
      </label>
      <label>
        <input
          type="radio"
          name="fullTextLimiters"
          value="AtMyLibrary"
          onChange={onChangeRadio}
        />
        In my library
      </label>
    </div>
  );
}

export default Limiters;
