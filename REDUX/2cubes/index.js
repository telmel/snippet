import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { connect } from "react-redux";

var initialState = { pressed: true };

const reducer = (state = initialState, action) => {
    var pressed = !state.pressed;
    switch (action.type){
       case 'CHANGECOLOR':
          return { ...state, pressed: pressed }
       default:
          return state
    }
}

const store = createStore(reducer);

function App(){
  return ( 
    <div>
        <Wrapbox1 />
        <Wrapbox2 />
    </div>
  );
}

const changecolor = () => ({ type: "CHANGECOLOR" });
const mapDispatchToProps1 = dispatch => ({ changecolor: () => dispatch(changecolor()) });
const Box1 = ({ changecolor }) => <div style={{ background: 'grey', width:"300px", height:"100px" }} onClick={changecolor}>First Box...</div>;
const Wrapbox1 = connect(null, mapDispatchToProps1)(Box1);

const Box2 = (props) => <div style={{backgroundColor:props.pressed ? "blue" : "red", width:"300px", height:"100px" }}>Second Box...</div>;
const mapStateToProps2 = (state) => ({ pressed: state.pressed });
const Wrapbox2 = connect(mapStateToProps2)(Box2);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));





