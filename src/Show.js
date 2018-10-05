import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Info from "./Info";
import Overview from "./Overview";

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false
    };
  }

  render() {
    var isShow = this.state.showInfo;
    let showing;

    if (isShow) {
      showing = <Info />;
    } else {
      showing = (
        <Overview
          date={this.props.date}
          city={this.props.city}
          onClick={this.toggleInfo}
        />
      );
    }

    return (
      <div className="show">
        <div className="info">
          <FontAwesomeIcon
            className="info-icon"
            icon={faInfoCircle}
            onClick={this.toggleInfo}
          />
        </div>

        {showing}
      </div>
    );
  }

  toggleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };

  // replace whitespace with dashes and make all characters lowercase
  processCity = city => {
    return city.replace(/\s+/g, "-").toLowerCase();
  };
}

export default Show;
