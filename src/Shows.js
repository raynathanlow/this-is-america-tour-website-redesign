import React, { Component } from "react";
import Show from "./Show";

const attractionId = "K8vZ917uog7"; // Childish Gambino
const order = [
  16, // Los Angeles
  11, // Oakland
  7, // Vancouver
  12, // San Jose
  17, // Los Angeles
  15, // Phoenix
  4, // Denver
  2 // Nashville
];

class Shows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      shows: []
    };
  }

  componentDidMount() {
    const url =
      "https://app.ticketmaster.com/discovery/v2/events.json?attractionId=" +
      attractionId +
      "&countryCode=CA&countryCode=US&apikey=M61pKiqIJiXcCbjLBGLP5jkrGNxtnjsl";

    fetch(url)
      .then(response => response.json())
      .then(
        result => {
          let shows = [];
          let show = {};

          result._embedded.events.forEach(element => {
            if (element.dates.status.code === "rescheduled") {
              let date = new Date(element.dates.start.dateTime);
              console.log(element.id);
              show["eventId"] = element.id;
              show["day"] = date.getDate();
              show["city"] = element._embedded.venues["0"].city.name;
              show["venue"] = element._embedded.venues["0"].name;
              shows.push(show);
              show = {};
            }
          });

          // sort events based on original dates
          shows = shows.sort(function(a, b) {
            return order.indexOf(a.day) > order.indexOf(b.day);
            //for the sake of recent versions of Google Chrome use:
            //return a.key.charCodeAt(0) > b.key.charCodeAt(0); or return a.key.charCodeAt(0) - b.key.charCodeAt(0);
          });

          this.setState({
            isLoaded: true,
            shows: shows
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
    const { error, isLoaded, shows } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <main className="shows">
          {shows.map(show => (
            <Show
              key={show.day}
              day={show.day}
              city={show.city}
              venue={show.venue}
              eventId={show.eventId}
            />
          ))}
        </main>
      );
    }
  }
}

export default Shows;
