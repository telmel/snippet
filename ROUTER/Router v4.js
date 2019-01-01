import React from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route, Switch, Link} from 'react-router-dom';

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)
// The Main component renders one of the three Routes (provided that one matches).
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/service' component={Service}/>
    </Switch>
  </main>
)

// The Header creates links that can be used to navigate between routes.
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

const Home = () => <h1>Welcome to Hurricane!</h1>;
const About = () => <h1>Some info about hero</h1>;
const Service = () => <h1>There are many stories</h1>;


// This demo uses a HashRouter instead of BrowserRouter because there is no server to match URLs
ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'));