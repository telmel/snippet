import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props) {
        super(props); 
        this.state = { error: null, isLoaded: false, items: [] }; 
	}
	
    componentDidMount() {
        fetch("http://baza/index.php") 
        .then(res => res.json())
        .then( result => { this.setState({ isLoaded: true, items: result }); },(error) => { this.setState({ isLoaded: true, error }); } )
	}
	
	render() { 
		const { error, isLoaded, items } = this.state;
        if (error) {
			return <div>Error: {error.message}</div>; 
		} 
        else if (!isLoaded) {
			return <div>Loading...</div>; 
		} 
        else {
			return (
				<div>{items}</div> 
			); 
		} 
	} 
}

ReactDOM.render(<App />, document.getElementById("root"));