import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';

// actions.js
const addRepos = repos => ({ type: 'ADD_REPOS', repos });
const clearRepos = () => ({ type: 'CLEAR_REPOS' });
const getRepos = username => async dispatch => {
  try {
    const url = `https://api.github.com/users/${username}/repos`;
    const response = await fetch(url);
    const responseBody = await response.json();
    dispatch(addRepos(responseBody));
  } catch (error) {
    console.error(error);
    dispatch(clearRepos());
  }
};


// reducers.js
const repos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_REPOS':
      return action.repos;
    case 'CLEAR_REPOS':
      return [];
    default:
      return state;
  }
};

const reducers = combineReducers({ repos });

const store = createStore(reducers, {}, applyMiddleware(thunk));

// App.js
class App extends Component {
  constructor() {
	super();
	this.state = { username: 'mapledrive' };
  }
  
  componentDidMount() {
    this.updateRepoList(this.state.username);
  }

  updateRepoList = username => this.props.getRepos(username);

  render() {
    return (
      <div>
        <h1>Github username: </h1>
        <input type="text" value={this.state.username} onChange={e => this.setState({ username: e.target.value })} />
        <button onClick={() => this.updateRepoList(this.state.username)}>Get All Repos</button>
        <ul>
          {this.props.repos.map((repo, index) => ( <li key={index}><a href={repo.html_url} >{repo.name}</a></li>  ))}
        </ul>
      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = (state) => ({ repos: state.repos });
const mapDispatchToProps = { getRepos };
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(<Provider store={store}><AppContainer /></Provider>, document.getElementById('root'));