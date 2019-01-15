import React, { Component } from "react";
import Checkbox from "./Checkbox";
import RadioButton from "./RadioButton";

function Limiters({ limiters, onChangeCheckbox, onChangeRadio }) {
  return (
    <div>
      {limiters.map(limiter => {
        if (limiter.type === "checkbox") {
          return <Checkbox label={limiter.label} onChange={limiter.onChange} />;
        } else if (limiter.type === "radio") {
          return (
            <RadioButton
              label={limiter.label}
              name={limiter.name}
              value={limiter.value}
              onChange={limiter.onChange}
            />
          );
        }
      })}
      {/*<Checkbox label="Peer Reviewed" onChange={onChangeCheckbox} />*/}
      {/*<RadioButton*/}
      {/*label="Read online"*/}
      {/*name="fullTextLimiters"*/}
      {/*value="readOnline"*/}
      {/*onChange={onChangeRadio}*/}
      {/*/>*/}
      {/*<RadioButton*/}
      {/*label="At my library"*/}
      {/*name="fullTextLimiters"*/}
      {/*value="AtMyLibrary"*/}
      {/*onChange={onChangeRadio}*/}
      {/*/>*/}
    </div>
  );
}

export default Limiters;
