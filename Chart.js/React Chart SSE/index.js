import React from "react";
import ReactDOM from "react-dom";
import {Line} from 'react-chartjs-2';

class Chart extends React.Component {
  static defaultProps = { displayTitle: false, displayLegend: false };
  render(){
    return (
      <div>
		<Line data={{ labels: this.props.price, 
					  datasets: [
								  {
									label: "price",
									data: this.props.price,
									backgroundColor: "#c6e8ef",
									borderWidth: 2,
									borderColor: "#0cabc2",
									pointRadius: 0
								  }
								]
					}}
			  options={{ legend: { display: false } }}  />	  
      </div>
    )
  }
}

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
			<div>
				<Chart price={this.state.data} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));