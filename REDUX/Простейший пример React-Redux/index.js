import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import { createStore } from "redux";
import { connect } from "react-redux";

function reducer(state = 0, action){
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

var store = createStore(reducer);

const Counter = props => {
	const addColor = () => props.sendTheAlert();
    return <div onClick={addColor}>{props.testStore}</div>;
}

function mapStateToProps(state){ return { testStore: state };}

function mapDispatchToProps(dispatch){
  return { sendTheAlert: function(){ dispatch({ type: "INCREMENT", payload: 4 }); }  };
}

const App = connect(mapStateToProps, mapDispatchToProps)(Counter);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("root"));