// Action Creator
// In Redux, action creators simply return an action object
// In Redux, to actually initiate a dispatch, pass the result to the dispatch() function: dispatch(addTodo(text))

export var increaseTodo = () => {
  return {
    type: "increase"
  };
};


function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}



export var updateTodo = wish_value => {
  return {
    type: "update",
    wish_value: wish_value
  };
};
