import React, { Component } from "react";
import Show from "./Show";

const attractionId = "K8vZ917uog7"; // Childish Gambino
const order = [
  "2018-12-16", // Los Angeles
  "2018-12-11", // Oakland
  "2018-12-07", // Vancouver
  "2018-12-12", // San Jose
  "2018-12-17", // Los Angeles
  "2018-12-15", // Phoenix 
  "2018-12-04", // Denver
  "2018-12-02"  // Nashville
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
          var shows = [];
          var show = {};

          result._embedded.events.forEach(element => {
            if (element.dates.status.code === "rescheduled") {
              show["date"] = element.dates.start.localDate;
              show["city"] = element._embedded.venues["0"].city.name;
              show["venue"] = element._embedded.venues["0"].name;
              shows.push(show);
              show = {};
            }
          });

          // sort events based on original dates
          shows = shows.sort(function(a, b) {
            return order.indexOf(a.date) > order.indexOf(b.date);
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
            <Show key={show.date} date={show.date} city={show.city} venue={show.venue}/>
          ))}
        </main>
      );
    }
  }
}

export default Shows;
