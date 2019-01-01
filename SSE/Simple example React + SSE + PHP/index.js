import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.eventSource = new EventSource("http://sse");
  }

  componentDidMount() {
    this.eventSource.onmessage = event => {
      var price = JSON.parse(event.data);
      this.setState({ data: price });
    };
  }

  render() {
    return (
      <div className="App">
        <h1>STATE NOW LOOKS LIKE THIS: {this.state.data.join()}</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
