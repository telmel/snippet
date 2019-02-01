import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
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

const Home = () => <h1>Welcome to Hurricane!</h1>;
const About = () => <h1>Some info about hero</h1>;
const Service = () => <h1>There are many stories</h1>;



ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
