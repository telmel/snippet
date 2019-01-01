import React, { Component } from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import { createStore } from "redux";
import { connect } from "react-redux";
import "./index.css";

function reducer(state = [], action) {
  if (action.type === "SHWAMBAAA"){ return [action.payload]; }
  return state;
}
var store = createStore(reducer);
// In this code, we pass our reducer to the Redux createStore function, which returns a store object. 
// We then pass this object to the react-redux Provider component, which is rendered at the top of our component tree. 
// This ensures that any time we connect to Redux in our app via react-redux connect, the store is available to our components.



// presentational component  Далее добавим component который будет определять всю визуальную часть:
class Counter extends Component {
  addColor() {
    // Как сгенерировать случайный цвет на Javascript
	var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
	this.props.deformation(hue);
  }
  render() { 
	console.log(this.props.testStore);
    return (
      <div>
        <div style={{backgroundColor: this.props.testStore[0]}} className="none" onClick={this.addColor.bind(this)}>Add track</div>
      </div>
    );
  }
}

// There are two redux defined core methods of each container: mapStateToProps and mapDispatchToProps: 
// mapStateToProps responsible to load states from store and map them into components props,
// while mapDispatchToProps is to send action to reducers.
function mapStateToProps(state){ return { testStore: state };}

function mapDispatchToProps(dispatch) {
  return { deformation: colorcode => { dispatch({ type: "SHWAMBAAA", payload: colorcode }); }  };
}

// Connected Component
const App = connect(mapStateToProps, mapDispatchToProps)(Counter);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("root"));