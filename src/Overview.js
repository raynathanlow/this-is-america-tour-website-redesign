import React, { Component } from "react";

class Overview extends Component {
  render() {
    let city = this.props.city;
    if (this.props.city === "Inglewood") {
      city = "Los Angeles (Inglewood)";
    }
    if (this.props.city === "Glendale") {
      city = "Phoenix (Glendale)"
    }
    return (
      <div className="overview">
        <img
          className={
            "svg " + this.replaceWhitespace(this.props.city, "-") + "-" + this.props.day
          }
          src={"images/" + this.props.day + ".svg"}
          alt={"Handwriting depicting " + this.props.originalDate + " " + city + " show that has since been rescheduled to December " + this.props.day}
        />
      </div>
    );
  }

  // replace whitespace with dashes and make all characters lowercase
  replaceWhitespace = (text, character) => {
    return text.replace(/\s+/g, character).toLowerCase();
  };
}

export default Overview;
