import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { connect } from "react-redux";

var initialState = { count: 3 };

const reducer = (state = initialState, action) => {
    var count = state.count;
    switch (action.type){
       case 'increase':
          return { count: Number(count) + 1 }
       default:
          return state
    }
}

const store = createStore(reducer);
const Front = ({ count, dispatch }) => <button onClick={ () => dispatch({ type: "increase" }) }>{count}</button>;
const mapStateToProps = (state) => ({ count: state.count })
const App = connect(mapStateToProps)(Front);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));