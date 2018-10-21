import React, { Component } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="flex-container">
          <div style={{ maxWidth: 450 }}>
            <img id="main-img" src="/flowers.jpg" alt="flowers" />
          </div>
          <div style={{ marginLeft: 5, maxWidth: 400 }}>
            <h1>hello world</h1>
            <AboutMe />
            <Contact />
          </div>
        </div>
        <span>open your eyes</span>
      </div>
    );
  }
}

export default App;
