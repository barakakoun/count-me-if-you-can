import React, { Component } from "react";

class TimerInput extends Component {
  render() {
    return (
      <div style={{ marginLeft: 100 }}>
        <h3>Input your desired timer</h3>
        <input
          // {...this.props.isOnMove? 'disabled': ''}
          type="number"
          // seconds={this.props.seconds}
          onChange={(e) => this.props.handleChange.bind(this, e.target.value)}
          value={this.props.seconds}
          required
        />
      </div>
    );
  }
}

export default TimerInput;
