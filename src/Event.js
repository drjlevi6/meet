import React, { Component } from "react";
import Alert from 'react-bootstrap/Alert';

class Event extends Component {
  state = { isExpanded: false, details: [] }
  render() { // returned <h2> was this.props.event.summary
    return <Alert
      className='event-alert'
      variant='outlined'
    >
       <Alert.Heading> { this.props.summary }u</Alert.Heading>
     
      {
        this.state.isExpanded &&
        <div className='event-details'>
          <p>{ this.props.event.start.dateTime }</p>
        </div> 
      }
      <button onClick={() => 
        this.toggleExpandedDetails()}>Show/Hide Details</button>
    </Alert>;
  }

  toggleExpandedDetails() {
    this.setState({isExpanded: !this.state.isExpanded});
  }
}
export default Event;
