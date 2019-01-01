var initialState = ["Accurate", "Large"];

function CountReducer(state = initialState, action) {
  if (action.type === "ADD_TRACK"){ return [...state, action.payload]; }
  return state;
}

export default CountReducer;
