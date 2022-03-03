import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CitySearch />
        <EventList />
      </div>
    );
  }

function App() {
  /* 
    The following line from the return <p> was replaced:
      Edit <code>src/App.js</code> and save to reload.
   */
  return (
    <div className="App">
      <EventList />
    </div>
  );
}

export default App;
