import React, { Component } from "react";
import Shows from "./Shows";

var h2 = document.querySelector('h2');
var h2Pos = getPosition(h2);

document.body.onscroll = function () {
  if (window.pageYOffset >= h2Pos) {
    h2.classList.add('fixed');
  } else {
    h2.classList.remove('fixed');
  }
};

window.addEventListener = function () {
  if (window.pageYOffset >= h2Pos) {
    h2.classList.add('fixed');
  } else {
    h2.classList.remove('fixed');
  }
};

function getPosition(element) {
  var yPosition = 0;

  while (element) {
    yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
    element = element.offsetParent;
  }

  return yPosition;
}

class App extends Component {
  render() {
    return <Shows />;
  }
}

export default App;
