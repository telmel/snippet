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
	var url = `https://uxcandy.com/~shapoval/test-task-backend/?developer=sait&sort_field=${username}`;
    const response = await fetch(url);
    const responseBody = await response.json();
	console.log(responseBody.message.tasks);
    dispatch(addRepos(responseBody.message.tasks));
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
	this.state = { isLoggedIn: false };
  }
  
  componentDidMount() {
    this.updateRepoList(this.state.username);
  }
  
  toggleState() {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  }

  updateRepoList = username => this.props.getRepos(username);

  render() { 
		console.log(this.props.repos)
		var isLoggedIn = this.state.isLoggedIn;
    return (
		<div className="container">
		<div className="control">
		{ isLoggedIn ? null : <input defaultValue="admin" type="text" /> }
		{ isLoggedIn ? null : <input defaultValue="123" type="text" /> }
		
		<button className="new" onClick={this.toggleState.bind(this)}>{isLoggedIn ? 'Log Out' : 'Log In'}</button>
      </div>
      <div className="control">
		<button className="new" onClick={() => this.updateRepoList(this.state.username)}>New Task</button>
      </div>
      <div className="control">
        <div className="btn-group">
		  <button onClick={() => this.updateRepoList('username')}>name</button>
		  <button onClick={() => this.updateRepoList('email')}>email</button>
		  <button onClick={() => this.updateRepoList('status')}>status</button>
        </div>
      </div>
      <IdiomaticReactList tasks={this.props.repos} admin={this.state.isLoggedIn} />	
      <div className="pagination">
        <button className="page-numbers">1</button>
        <button className="page-numbers">2</button>
        <button className="page-numbers">3</button>
        <button className="page-numbers">4</button>
        <button className="page-numbers">5</button>
      </div>
    </div> 
    );
  }
}

function IdiomaticReactList(props) {  console.log(props); 
  return (
    <div>
      {props.tasks.slice(0,3).map((item, index) => (<Item key={index} item={item} admin={props.admin} />))}
    </div>
  );
}

function Item(props){   
	console.log(props); 
	var isLoggedIn = props.admin;
	var textInput;
	var setTextInputRef = element => {textInput = element};
	var submit = () => {};
	return (
		<div className="item">
			{ isLoggedIn ? <input type="checkbox" /> : null } 
			{props.item.username }  
			{props.item.email} 
			{ isLoggedIn ? <input defaultValue={props.item.text} type="text" ref={setTextInputRef} /> : props.item.text } 
			{ isLoggedIn ? <button onClick={submit}>Save</button> : null }
		</div>
	);
}


// AppContainer.js
const mapStateToProps = (state) => ({ repos: state.repos });
const mapDispatchToProps = { getRepos };
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(<Provider store={store}><AppContainer /></Provider>, document.getElementById('root'));




