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
    let isShow = this.state.showInfo;
    let showing;
    let lessMore;

    if (isShow) {
      showing = <Info day={this.props.day} city={this.props.city} venue={this.props.venue} eventId={this.props.eventId}/>;
      lessMore = "Less info";
    } else {
      showing = <Overview day={this.props.day} city={this.props.city} />;
      lessMore = "More info";
    }

    return (
      <div className="show">
          <div className="more-info">
            <div>Rescheduled</div>
            <FontAwesomeIcon
              className="info-icon"
              icon={faInfoCircle}
              onClick={this.toggleInfo}
            />
            {/* <div className="lessMore">{lessMore}</div> */}
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

}

export default Show;
