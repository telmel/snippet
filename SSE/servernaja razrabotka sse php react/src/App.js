// src/App.js

import React, { Component } from "react";
import { getInitialFlightData } from "./DataProvider";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getInitialFlightData()
    };

    this.eventSource = new EventSource("http://sse");
  }

  componentDidMount() {
	  this.eventSource.onmessage = (event) => {
      // console.log(typeof event.data); // zdes mi poluchili string
      var d = JSON.parse(event.data);
      // console.log(Array.isArray(d)); //true
      console.log(d);
	  this.updateFlightState(d);
	  // console.log(typeof this.state.data);
    };
  }
  
	updateFlightState(d) {
		this.setState({data: d});
	}
  
  render() {
    return ( 
      <div className="App">
  <h2>STATE NOW LOOKS LIKE THIS: {this.state.data.toSource()}</h2>
      </div>
    );
  }
}

export default App;
