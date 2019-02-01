import React from 'react';
import ReactDOM from 'react-dom';
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

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
	this.props.getRepos(event.target.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite repo:
          <select onChange={this.handleChange}>
            <option value="mapledrive">mapledrive</option>
            <option value="telmel">telmel</option>
            <option value="jerairrest">jerairrest</option>
            <option value="reduxjs">reduxjs</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapDispatchToProps = { getRepos };
const TopContainer = connect(null, mapDispatchToProps)(Top);



class Bottom extends React.Component {
	render(){
		return (
			<div>
				{this.props.repos.map((repo, index) => ( <li key={index}><a href={repo.html_url} >{repo.name}</a></li>  ))}
			</div>
		)
	}
}

const mapStateToProps2 = state => ({ repos: state });
const BottomContainer = connect(mapStateToProps2)(Bottom);

function App() {
  return (
    <div>
		<TopContainer/>
		<BottomContainer/>
    </div>
  );
}


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));