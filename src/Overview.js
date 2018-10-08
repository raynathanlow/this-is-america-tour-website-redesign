import React, { Component } from "react";

class Overview extends Component {
  render() {
    return (
      <div className="overview">
        <img
          className={
            "svg " + this.replaceWhitespace(this.props.city, "-") + "-" + this.props.day
          }
          src={"images/" + this.props.day + ".svg"}
          alt={"Handwriting depicting September 30 Vancouver show that has since been rescheduled to December 7"}
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
