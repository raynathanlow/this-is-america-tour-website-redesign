import React, { Component } from "react";
import Heading from "./Heading";
import Tickets from "./Tickets";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      url: "",
      specialGuest: ""
    };
  }

  componentDidMount() {
    let url =
      "https://app.ticketmaster.com/discovery/v2/events/" +
      this.props.eventId +
      ".json?apikey=M61pKiqIJiXcCbjLBGLP5jkrGNxtnjsl";

    fetch(url)
      .then(response => response.json())
      .then(
        result => {
          let url;
          if (this.props.city === "Denver") {
            url = "https://www.altitudetickets.com/events/detail/childish-gambino";
          } else {
            url = result.url;
          }
          this.setState({
            isLoaded: true,
            url: url,
            specialGuest: result._embedded.attractions[1].name
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, url, specialGuest } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      // show a picture of donald
      return (
        <div className="loading animate-flicker">
          {/* <div className="text">Loading</div> */}
          <img src="images/loading.jpg" alt="Childish Gambino, with his back to the camera, facing a set of lasers" />
        </div>
      );
    } else {
      return (
        <div className="info">
          <Heading
            day={this.props.day}
            city={this.props.city}
            venue={this.props.venue}
            specialGuest={specialGuest}
          />
          <Tickets url={url} city={this.props.city} day={this.props.day} />
          <div
            className="infoBg"
            style={{ backgroundImage: `url(images/` + this.replaceWhitespace(this.props.venue, "-") + `.jpg)` }}
            title={"Front view of " + this.props.venue + " venue"}
          />
        </div>
      );
    }
  }

  // replace whitespace with dashes and make all characters lowercase
  replaceWhitespace = (text, character) => {
    return text.replace(/\s+/g, character).toLowerCase();
  };
}

export default Info;
