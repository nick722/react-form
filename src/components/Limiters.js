import React, { Component } from "react";
import Checkbox from "./Checkbox";
import RadioButton from "./RadioButton";

function Limiters({ onChangeCheckbox, onChangeRadio }) {
  return (
    <div>
      <Checkbox label="Peer Reviewed" onChange={onChangeCheckbox} />
      <RadioButton
        label="Read online"
        name="fullTextLimiters"
        value="readOnline"
        onChange={onChangeRadio}
      />
      <RadioButton
        label="At my library"
        name="fullTextLimiters"
        value="AtMyLibrary"
        onChange={onChangeRadio}
      />
    </div>
  );
}

export default Limiters;
