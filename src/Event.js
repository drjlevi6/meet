import React, { Component } from "react";

class Event extends Component {
  state = { isExpanded: false, details: [] }
  eData = this.props.event;
  render() {
    return (
      <div  className='event-div'>
        <h2 className='summary'>{eData.summary}</h2>   
        {
          this.state.isExpanded &&
          <div className='event-details'>
            <p>{ eData.start.dateTime }
              ({eData.start.timeZone} Time)</p>
            <p>@{eData.summary} | 
              {eData.location}</p>
            <h3>About event:</h3>
            <a className='html-link'
              href={this.eData.htmlLink}>
              See details on Google Calendar
            </a>
            <p>{eData.description}</p>
          </div> 
        }
        <button onClick={() => 
          this.toggleExpandedDetails()}>
            Show/Hide Details</button>
      </div>
    )
  }

  toggleExpandedDetails() {
    this.setState({isExpanded: !this.state.isExpanded});
  }
}
export default Event;
