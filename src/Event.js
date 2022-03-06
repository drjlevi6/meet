import React, { Component } from "react";

class Event extends Component {
  state = { isExpanded: false, details: [] }
  render() { // returned <h2> was this.props.event.summary
     return <div>
      <h2>{ this.props.summary }</h2>
      {
        this.state.isExpanded &&
        <div className='event-details'>
          <p>{ this.props.event.start.dateTime }</p>
        </div> 
      }
      <button onClick={() => 
        this.toggleExpandedDetails()}>Show/Hide Details</button>
    </div>;
  }
  toggleExpandedDetails() {
    console.log('Event.js, toggleExpandedDetails, ' + 
      'isExpanded before setState:', this.state.isExpanded);
    this.setState({isExpanded: !this.state.isExpanded});
    console.log('Event.js, toggleExpandedDetails, ' + 
    'isExpanded after setState:', this.state.isExpanded);

  }
}
export default Event;
