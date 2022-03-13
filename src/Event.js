import React, { Component } from "react";

class Event extends Component {
  state = { isExpanded: false, details: [] }
  render() {
    return <div  className='event-div'>
      <h2 className='summary'>{this.props.event.summary}</h2>
     
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
