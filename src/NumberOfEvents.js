import React, { Component } from 'react';
import './NumberOfEvents.css';

class NumberOfEvents extends Component {
  state = { numberOfEvents: 32 }

  render() {
    return (
      <div className="number-of-events-div">
        <input
          type="text"
          className='number-of-events-input'
         value={this.state.NumberOfEvents}
         onChange={this.handleInputChanged}
         />
      </div>
    );
  }
}

export default NumberOfEvents;
