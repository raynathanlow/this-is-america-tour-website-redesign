import React, { Component } from "react";

class Tickets extends Component {
  render() {
    let city;
    let seller;
    if (this.props.city === "Inglewood") {
      city = "Los Angeles (Inglewood)";
    }
    if (this.props.city === "Glendale") {
      city = "Phoenix (Glendale)"
    } else {
      city = this.props.city;
    }
    if (this.props.city === "Denver") {
      seller = "Altitude Tickets";
    } else {
      seller = "Ticketmaster"
    }
    return (
      <div className="tickets">
        <a title={"Go to " + seller + " to get tickets for " + city + " show on December " + this.props.day}href={this.props.url}>GET TICKETS</a>
      </div>
    );
  }
}

export default Tickets;
