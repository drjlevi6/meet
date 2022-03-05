import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import Event from './Event';

class App extends Component {
  render() {
    console.log('App.js: render()');
    return (
      <div className="App">
        <h2>Meet App</h2>
        <h4>Choose your nearest city</h4>
        <CitySearch />
        <EventList />
        <Event />
      </div>
    );
  }
}

export default App;
