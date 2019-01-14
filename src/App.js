import React, { Component } from "react";
import "./App.css";
import FavoriteColorForm from "./components/FavoriteColorForm";
import Register from "./components/Register";
import Filters from "./components/Filters";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Filters</h2>
        <Filters />
        <hr />
        <h2>FavoriteColorForm</h2>
        <FavoriteColorForm />
        <hr />
        <h2>Register</h2>
        <Register />
      </div>
    );
  }
}

export default App;
