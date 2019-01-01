import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {connect} from 'react-redux';


var increaseTodo = () => { return { type: 'increase',  }  }
var updateTodo = (wish_value) => {  return {  type: 'update', wish_value: wish_value, }   }


// React component
class Counter extends Component {
    render() {
        const {count, wish_value, onIncreaseClick, onUpdateClick} = this.props
        return (
            <div>
                <span>{count}</span><br/>
                <input value={wish_value} type='text' onChange={onUpdateClick}/><br/>
				<button onClick={onIncreaseClick}>Increase</button>
            </div>
        )
    }
}

var initialState = {count: 43, wish_value: 82};

function reducer(state = initialState, action ){
  const count = state.count;
  const wish_value = action.wish_value;
  switch (action.type) {
    case "increase":
      return {
        count: Number(count) + 1,
        wish_value: Number(count) + 1
      };
    case "update":
      return {
        count: Number(wish_value)
      };
    default:
      return state;
  }
}

var store = createStore(reducer);

// Map Redux state to component props
function mapStateToProps(state){
    return {
        count: state.count,
        wish_value: state.wish_value
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseTodo()),
        onUpdateClick: event => dispatch((updateTodo(event.target.value) )),
    }
}

// Connected Component
var App = connect(mapStateToProps, mapDispatchToProps)(Counter);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));