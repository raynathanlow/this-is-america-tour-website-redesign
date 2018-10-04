import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

class Show extends Component {
  render() {
    return (
      <div className="show">
        <FontAwesomeIcon className="info-icon" icon={faInfoCircle} />
        <img
          className={"svg " + this.processCity(this.props.city) + "-" + this.props.date}
          src={"images/" + this.props.date + ".svg"}
          alt={this.props.date}
        />
      </div>
    );
  }

  processCity = (city) => {
    return city.replace(/\s+/g, '-').toLowerCase();
  }
}

export default Show;
