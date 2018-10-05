import React, { Component } from "react";

class Overview extends Component {
  render() {
    return (
      <div className="overview">
        {/* button should switch between the more info and the date image instead of covering the date image with the more info */}
        
        <img
          className={
            "svg " + this.processCity(this.props.city) + "-" + this.props.date
          }
          src={"images/" + this.props.date + ".svg"}
          alt={this.props.date}
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
