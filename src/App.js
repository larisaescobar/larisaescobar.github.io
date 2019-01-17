import React, { Component } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="flex-container">
          <AboutMe />
        </div>
      </div>
    );
  }
}

export default App;
