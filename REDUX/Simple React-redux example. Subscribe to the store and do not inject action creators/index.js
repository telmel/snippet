import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {connect} from 'react-redux';

var initialState = {count: 30};

function reducer(state = initialState, action) {
	var count = state.count;
	if (action.type === "increase"){ return { count: Number(count) + 1 }  }
	return state;
}

var store = createStore(reducer);

class Counter extends Component {
    render() {
        var {count, dispatch} = this.props
        return (
            <div>
                <span>{count}</span><br/>
				<button onClick={ function(){ dispatch({ type: "increase" }) } }>Increase</button>
            </div>
        )
    }
}

function mapStateToProps(state){ return { count: state.count } }

var App = connect(mapStateToProps)(Counter);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));