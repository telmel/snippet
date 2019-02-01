import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { connect, Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";



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
function Home(props) {
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
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);



const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomeContainer}/>
      <Route path='/about' component={About}/>
      <Route path='/service' component={Service}/>
    </Switch>
  </main>
)


const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/service'>Service</Link></li>
      </ul>
    </nav>
  </header>
)

const About = () => <h1>Some info about hero</h1>;
const Service = () => <h1>There are many stories</h1>;


ReactDOM.render(
  <Provider store={store}>
	<BrowserRouter>
    <App />
	</BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
