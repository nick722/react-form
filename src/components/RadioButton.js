import React from "react";

const RadioButton = ({ label, name, value, onChange }) => {
  return (
    <label>
      <input type="radio" name={name} value={value} onChange={onChange} />
      {label}
    </label>
  );
};

export default RadioButton;
