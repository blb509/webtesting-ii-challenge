import React, { Component } from "react";

class Display extends Component {
  render() {
    return (
      <div className="display">
        <div className="balls">
          Balls
          {this.props.balls}
        </div>
        <div className="strikes">{"Strikes" + this.props.strikes}</div>
      </div>
    );
  }
}

export default Display;
