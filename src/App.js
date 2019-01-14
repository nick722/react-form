import React, { Component } from "react";
import "./App.css";
import FavoriteColorForm from "./components/FavoriteColorForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        YN React Form
        <FavoriteColorForm />
      </div>
    );
  }
}

export default App;
