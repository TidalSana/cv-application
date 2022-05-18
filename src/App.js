import React, { Component } from "react";
import General from "./components/general";
import Work from "./components/work";
import Education from "./components/education";
import Save from "./components/save";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App general">
        <General />
        <Work />
        <Education />
        <Save />
      </div>
    );
  }
}

export default App;
