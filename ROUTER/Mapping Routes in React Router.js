// Representing Routes as Objects. Mapping Routes in React Router
// Representing Routes as Objects. Mapping Routes in React Router
// Representing Routes as Objects. Mapping Routes in React Router



import React from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route, Switch, Link} from 'react-router-dom';

const Home = () => <h1>Welcome to the company</h1>;
const About = () => <h1>Some info about photos</h1>;
const Service = () => <h1>We are providing quality services</h1>;

const routes = [
	{path: '/', component: Home, name: 'Home' }, 
	{path: '/about', component: About, name: 'About' }, 
	{path: '/service', component: Service, name: 'Service' }
];

// куча роутов. тут всегда будет без изменений, даже если ссылки в навигации и футере
function Main()  {
    const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);
    return (
      <Switch>{routeComponents}</Switch>
    );
}

// список ссылок в футере столбиком. ul-li. принимает массив обьектов с роутами и названиями и отдает лист ссылок
function FooterList() {
  const listItems = routes.map(({path, component, name}, key) => <li key={key}><Link to={path}>{name}</Link></li> );
  return (
    <ul>{listItems}</ul>
  );
}

const App = (props) => {
	return (
    	<div>
			<Main />
			<FooterList />
    	</div>
  	);
}

ReactDOM.render(<HashRouter><App/></HashRouter>, document.getElementById('root'));