import React, { Component } from "react";

class Overview extends Component {
  render() {
    return (
      <div className="overview">
        <img
          className={
            "svg " + this.processCity(this.props.city) + "-" + this.props.day
          }
          src={"images/" + this.props.day + ".svg"}
          alt={this.props.day}
        />
      </div>
    );
  }

  // replace whitespace with dashes and make all characters lowercase
  processCity = city => {
    return city.replace(/\s+/g, "-").toLowerCase();
  };
}

export default Overview;
