import React, { Component } from "react";

class Heading extends Component {
  render() {
    let city = this.props.city;
    if (this.props.city == "Inglewood") {
      city = "Los Angeles (Inglewood)";
    }
    return (
      <div className="heading">
        <div className="dayCity">
          <div className="date">December {this.props.day}</div>
          <div>{city}</div>
        </div>

        <div>{this.props.venue}</div>
      </div>
    );
  }
}

export default Heading;
