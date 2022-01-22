import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  /* 
    The following line from the return <p> was replaced:
      Edit <code>src/App.js</code> and save to reload.
   */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World! --(Line modified by jl)
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
  );
}

export default App;
