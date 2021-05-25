import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logo from './assets/images/BBCFLogo.jpg';
import './App.css';

import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
