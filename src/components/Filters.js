import React, { Component } from "react";

function Filters(props) {
  var titles = [
    {
      display: "Architect",
      key: "architect"
    },
    {
      display: "Designer",
      key: "designer"
    },
    {
      display: "Contractor",
      key: "contractor"
    },
    {
      display: "Support Stuff",
      key: "staff"
    }
  ];

  return (
    <form action="" id="directory-filters">
      <div className="group">
        <label htmlFor="person-name">Name:</label>
        <input
          type="text"
          name="person_name"
          placeholder="Name of employee"
          id="txt-name"
          value={props.currentName}
          onChange={updateName}
        />
      </div>
      <div className="group">
        <label htmlFor="person-title">Job Title:</label>
        <select
          name="person_title"
          id="person-title"
          value={props.currentTitle}
        >
          <option value="">- Select -</option>
          {titles.map(title => (
            <option value={title.key}>{title.display}</option>
          ))}
        </select>
      </div>
      <div className="group">
        <label>
          <input
            checked={props.isIntern}
            type="checkbox"
            value="1"
            name="person_intern"
          />{" "}
          Intern
        </label>
      </div>
    </form>
  );
}

export default Filters;
