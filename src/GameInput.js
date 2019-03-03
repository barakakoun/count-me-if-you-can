import React, { Component } from "react";
import "./GameInput.css";

class GameInput extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      score: 0,
      currNumber: ""
    };
  }

  onChangeNumber(e) {
    var numberPressed = e.target.value;
    console.log(numberPressed + "   " + this.state.score);
    this.setState({ currNumber: numberPressed });

    if (numberPressed == this.state.score + 1) {
      console.log("HEYY!");
      this.props.onOneUp();
      setImmediate(() =>
        this.setState(prevStete => {
          return { currNumber: "", score: prevStete.score + 1 };
        })
      );
    }
  }

  render() {
    return (
      <div style={{ marginLeft: 100 }}>
        <input
          disabled={this.props.disabled}
          type="number"
          className="scoreInput"
          onChange={this.onChangeNumber.bind(this)}
          value={this.state.currNumber}
          ref="numberInput"
        />
      </div>
    );
  }
}

export default GameInput;
