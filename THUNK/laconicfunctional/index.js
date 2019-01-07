import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { connect, Provider } from "react-redux";
import thunk from "redux-thunk";

// actions.js
const addRepos = repos => ({ type: "ADD_REPOS", repos });
const clearRepos = () => ({ type: "CLEAR_REPOS" });
const getRepos = username => async dispatch => {
  try {
    const url = `https://api.github.com/users/${username}/repos`;
    const response = await fetch(url);
    const responseBody = await response.json();
    dispatch(addRepos(responseBody));
  } catch (error) {
    console.log(error);
    dispatch(clearRepos());
  }
};

// reducers.js
const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_REPOS":
      return action.repos;
    case "CLEAR_REPOS":
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

// App.js
function App(props) {
  var textInput;
  var setTextInputRef = element => {textInput = element};
  var submit = () => props.getRepos(textInput.value);
  return (
    <div>
      <h1>Github username: </h1>
      <input defaultValue="mapledrive" type="text" ref={setTextInputRef} />
      <button onClick={submit}>Get All Repos</button>
      <ul>
        {props.repos.map((repo, index) => (<li key={index}><a href={repo.html_url}>{repo.name}</a></li> ))}
      </ul>
    </div>
  );
}

// AppContainer.js
const mapStateToProps = state => ({ repos: state });
const mapDispatchToProps = { getRepos };
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(<Provider store={store}><AppContainer /></Provider>, document.getElementById("root"));