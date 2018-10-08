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
              // console.log(element._embedded.attractions[1].name);
              show["eventId"] = element.id;
              show["day"] = date.getDate();
              show["city"] = element._embedded.venues["0"].city.name;
              show["venue"] = element._embedded.venues["0"].name;
              show["specialGuest"] = element._embedded.attractions[1].name;

              let originalDate;
              switch (date.getDate()) {
                case 16:
                  originalDate = "September 26";
                  break;
                case 11:
                  originalDate = "September 27";
                  break;
                case 7:
                  originalDate = "September 30";
                  break;
                case 12:
                  originalDate = "October 2";
                  break;
                case 17:
                  originalDate = "October 3";
                  break;
                case 15:
                  originalDate = "October 5";
                  break;
                case 4:
                  originalDate = "October 9";
                  break;
                case 2:
                  originalDate = "October 12";
                  break;
                default:
                  originalDate = "";
              }

              show["originalDate"] = originalDate;

              shows.push(show);
              show = {};
            }
          });

          // sort events based on original dates
          shows = shows.sort(function(a, b) {
            return (
              order.indexOf(a.day) > order.indexOf(b.day) ||
              -(order.indexOf(a.day) < order.indexOf(b.day))
            );
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
      return <div className="loading-shows">Loading shows...</div>;
    } else {
      return (
        <div className="shows">
          {shows.map(show => (
            <Show
              key={show.day}
              day={show.day}
              city={show.city}
              venue={show.venue}
              eventId={show.eventId}
              originalDate={show.originalDate}
            />
          ))}
        </div>
      );
    }
  }
}

export default Shows;
