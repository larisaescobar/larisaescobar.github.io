import React, { Component } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="flex-container">
          <Header />
          <AboutMe />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
