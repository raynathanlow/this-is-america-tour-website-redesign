import React, { Component } from "react";
import Heading from "./Heading";
import Tickets from "./Tickets";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      url: ""
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
          this.setState({
            isLoaded: true,
            url: result.url
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
    const { error, isLoaded, url } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      // show a picture of donald
      return <div>Loading...</div>;
    } else {
      return (
        <div className="info">
          <Heading
            day={this.props.day}
            city={this.props.city}
            venue={this.props.venue}
          />
          <Tickets url={url} />
          <div
            className="infoBg"
            style={{ backgroundImage: `url(images/rogers-arena.jpg)` }}
          />
        </div>
      );
    }
  }
}

export default Info;
