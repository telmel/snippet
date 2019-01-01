import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import { createStore } from "redux";
import { connect } from "react-redux";

function reducer(state = 0, action) {
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
// In this code, we pass our reducer to the Redux createStore function, which returns a store object. 
// We then pass this object to the react-redux Provider component, which is rendered at the top of our component tree. 
// This ensures that any time we connect to Redux in our app via react-redux connect, the store is available to our components.

// See how this display component gets the info from props (which came from the redux store via mapStateToProps)
// and it also gets its action function from its props: sendTheAlert().
const Counter = props => {
	const addColor = () => props.sendTheAlert();
    return <div onClick={addColor}>{props.testStore}</div>;
}

// There are two redux defined core methods of each container: mapStateToProps and mapDispatchToProps: 
// mapStateToProps responsible to load states from store and map them into components props,
// while mapDispatchToProps is to send action to reducers.
function mapStateToProps(state){ return { testStore: state };}

function mapDispatchToProps(dispatch) {
  return { sendTheAlert: function(){ dispatch({ type: "INCREMENT", payload: 4 }); }  };
}

// mapStateToProps() is a utility which helps your component get updated state(which is updated by some other components),
// mapDispatchToProps() is a utility which will help your component to fire an action event (dispatching action which may cause change of application state) (stack)

// Connected Component
const App = connect(mapStateToProps, mapDispatchToProps)(Counter);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("root"));