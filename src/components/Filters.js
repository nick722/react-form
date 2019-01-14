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
        />
      </div>
      <div className="group">
        <label htmlFor="person-title">Job Title:</label>
        <select name="person_title" id="person-title">
          <option value="">- Select -</option>
          {/*<option value="architect">Architect</option>*/}
          {/*<option value="designer">Designer</option>*/}
          {/*<option value="contractor">Contractor</option>*/}
          {/*<option value="staff">Support Staff</option>*/}
          {titles.map(title => (
            <option value={title.key}>{title.display}</option>
          ))}
        </select>
      </div>
      <div className="group">
        <label>
          <input type="checkbox" value="1" name="person_intern" /> Intern
        </label>
      </div>
    </form>
  );
}

export default Filters;
