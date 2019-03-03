import React, { Component } from "react";
import StartButton from "./StartButton";
import Timer from "./Timer";
import GameInput from "./GameInput";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialSec: 5,
      sec: 5,
      isOnMove: false,
      score: 0,
    };

    // this.secondsRemaining;
    this.intervalHandle = null;
    // method that triggers the countdown functionality
    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState(prevState => {
      if (prevState.sec === 0) {
        clearInterval(this.intervalHandle);
        window.confirm("Your Score Is: " + this.state.score);
        return { isOnMove: false, score:0, };
      }
      // console.log(prevState);
      return { sec: prevState.sec - 1 };
    });

    // var min = Math.floor(this.secondsRemaining / 60);
    // var sec = this.secondsRemaining - min * 60;
    // this.setState({
    //   minutes: min,
    //   seconds: sec
    // });
    // if (sec < 10) {
    //   this.setState({
    //     seconds: "0" + this.state.seconds
    //   });
    // }
    // if (min < 10) {
    //   this.setState({
    //     value: "0" + min
    //   });
    // }
    // if ((min === 0) & (sec === 0)) {
    //   clearInterval(this.intervalHandle);
    // }
    // this.secondsRemaining--;
  }

  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
    this.setState({ isOnMove: true, sec: this.state.initialSec }, () => {this.refs.gameInput.refs.numberInput.focus();});
    // this.refs.gameInput.refs.numberInput.focus();
    // console.log(this.intervalHandle);
    // let time = this.state.minutes;
    // this.secondsRemaining = time * 60;
  }

  render() {
    return (
      <div>
        score: {this.state.score}
        <GameInput
          score={this.state.score}
          onOneUp={() =>
            this.setState(prevState => {
              console.log("ONe up: "+ (prevState.score+1));
              return { score: prevState.score + 1 };
            })
          }
          disabled={!this.state.isOnMove}
          ref="gameInput"
        />

        <div style={{ marginLeft: 100 }}>
          <h3>Input your desired timer</h3>
          <select
            disabled={this.state.isOnMove}
            type="number"
            onChange={e =>
              this.setState({ initialSec: e.target.value, sec: e.target.value })
            }
            value={this.props.initialSec}
            required
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </div>
        <Timer seconds={this.state.sec} />
        <StartButton onStart={this.startCountDown} />
      </div>
    );
  }
}

export default App;
