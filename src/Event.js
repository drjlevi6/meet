import React, { Component } from "react";

class Event extends Component {
  state = { isExpanded: false, details: [] }
  render() {
    return <div></div>;
  }
  toggleExpandedDetails() {
    this.state.isExpanded = !this.state.isExpanded;
  }
}
export default Event;
