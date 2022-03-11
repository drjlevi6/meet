import React, { Component } from "react";
import Alert from 'react-bootstrap/Alert';

class Event extends Component {
  state = { isExpanded: false, details: [] }
  render() { // returned <h2> was this.props.event.summary
    return <div  className='event-div'>
      <h2>{this.props.summary}</h2>
     
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
    this.setState({isExpanded: !this.state.isExpanded});
  }
}
export default Event;
