import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Info from "./Info";
import Overview from "./Overview";

// var shows = document.querySelectorAll(".show");

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
    // let lessMore;
    let tabbable; // controls when the show div is tabbable

    if (isShow) {
      showing = (
        <Info
          day={this.props.day}
          city={this.props.city}
          venue={this.props.venue}
          eventId={this.props.eventId}
        />
      );
      // lessMore = "Less info";
      tabbable = -1; // not tabbable when info about show is showing
    }
    else {
      showing = <Overview day={this.props.day} city={this.props.city} originalDate={this.props.originalDate} />;
      // lessMore = "More info";
      tabbable = 0; // tabbable because the info is not yet showing
    }

    return (
      <div className="show" onClick={this.toggleInfo} tabIndex={tabbable} onKeyPress={this.handleKeyPress}>
        <div className="more-info">
          <div>Rescheduled</div>
          {/* <FontAwesomeIcon className="info-icon" icon={faInfoCircle} /> */}
          {/* <div className="lessMore">{lessMore}</div> */}
        </div>
        {showing}
      </div>
    );
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (document.activeElement.className.match('show')) {
        this.toggleInfo();
      }
    }
  }

  toggleInfo = () => {
    this.setState({
      showInfo: true
    });
  };
}

export default Show;
