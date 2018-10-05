import React, { Component } from "react";

class Tickets extends Component {
  render() {
    return (
      <div className="tickets">
        <a href={this.props.url}>BUY TICKETS</a>
      </div>
    );
  }
}

export default Tickets;
