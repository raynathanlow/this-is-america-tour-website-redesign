import React, { Component } from "react";

class Info extends Component {
  render() {
    return (
      <div className="info">
          <div>December {this.props.day}</div> 
      </div>
    );
  }
}

export default Info;
