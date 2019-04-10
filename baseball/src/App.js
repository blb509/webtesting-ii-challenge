import React, { Component } from "react";
import Display from "./components/display";
import Dashboard from "./components/dashboard";
import "./App.css";

class App extends Component {
  state = {
    strikes: 0,
    balls: 0
  };

  render() {
    return (
      <div className="App">
        <h2>Hello Earthling</h2>
        <Dashboard
          strike={this.strike}
          ball={this.ball}
          foul={this.foul}
          hit={this.hit}
        />
        <Display balls={this.state.balls} strikes={this.state.strikes} />
      </div>
    );
  }

  strike = () => {
    if (this.state.strikes === 2) {
      this.setState({ balls: 0, fouls: 0, strikes: 0 });
      return;
    }
    let newStrikes = this.state.strikes + 1;
    this.setState({ strikes: newStrikes });
  };

  ball = () => {
    if (this.state.balls === 3) {
      this.setState({ balls: 0, fouls: 0, strikes: 0 });
      return;
    }
    let newBalls = this.state.balls + 1;
    this.setState({ balls: newBalls });
  };

  foul = () => {
    if (this.state.strikes === 2) {
      return;
    }
    let newFouls = this.state.strikes + 1;
    this.setState({ strikes: newFouls });
  };

  hit = () => {
    this.setState({ balls: 0, fouls: 0, strikes: 0 });
  };
}

export default App;
