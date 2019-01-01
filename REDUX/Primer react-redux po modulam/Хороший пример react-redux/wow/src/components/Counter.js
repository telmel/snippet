import React, { Component } from "react";

export default class Counter extends Component {
  addTrack() {
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = "";
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={input => {
            this.trackInput = input;
          }}
        />
        <button onClick={this.addTrack.bind(this)}>Add track</button>
        <ul>
          {this.props.testStore.map((track, index) => (
            <li key={index}>{track}</li>
          ))}
        </ul>
      </div>
    );
  }
}
