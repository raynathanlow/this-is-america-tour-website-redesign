import React, { Component } from "react";

class Heading extends Component {
  render() {
    let city = this.props.city;
    if (this.props.city === "Inglewood") {
      city = "Los Angeles (Inglewood)";
    }
    if (this.props.city === "Glendale") {
      city = "Phoenix (Glendale)"
    }
    return (
      <div className="heading">
        <div className="dayCity">
          <div className="date">December {this.props.day}</div>
          <div className="city">{city}</div>
        </div>

        <div className="venue"><a title={"Find out how to get to " + this.props.venue + " on Google Maps"}target="_blank" rel="noopener noreferrer" href={"https://www.google.com/maps/search/?api=1&query=" + this.replaceWhitespace(this.props.venue, "+") + "+" + this.replaceWhitespace(this.props.city, "+")}>{this.props.venue}</a></div>
        <div className="specialGuest">Special Guest: {this.props.specialGuest}</div>
      </div>
    );
  }

  // replace whitespace with dashes and make all characters lowercase
  replaceWhitespace = (text, character) => {
    return text.replace(/\s+/g, character).toLowerCase();
  };
}

export default Heading;
