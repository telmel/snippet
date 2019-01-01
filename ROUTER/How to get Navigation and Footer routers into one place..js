How to get Navigation and Footer routers into one place. How to get Navigation and Footer routers into one place.
How to get Navigation and Footer routers into one place. How to get Navigation and Footer routers into one place.
How to get Navigation and Footer routers into one place. How to get Navigation and Footer routers into one place.


import React from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const Home = () => <h1>Welcome to the company</h1>;
const Service = () => <h1>We are providing quality services</h1>;
const Delivery = () => <h1>Delivery time is about ten days</h1>;
const Contacts = () => <h1>Please call me during working hours</h1>;
const Partners = () => <h1>Our partners are biggest manufacturers</h1>;
const Information = () => <h1>Please read that info</h1>;
const Tags = () => <h1>Here is the tag list</h1>;
const About = () => <h1>Some info about photos</h1>;
const More = () => <h1>To find out more please read that</h1>;

/**
 * Navigation
 */

var linkStyle = { display: 'inline-block', float: 'left' };
var navigationStyle = { height: '45px', lineHeight: '45px' };

const menus = [
	{path: '/', component: Home, name: 'Home' }, 
	{path: '/service', component: Service, name: 'Service' }, 
	{path: '/delivery', component: Delivery, name: 'Delivery' },
	{path: '/contacts', component: Contacts, name: 'Contacts' }, 
	{path: '/partners', component: Partners, name: 'Partners' },
	{path: '/information', component: Information, name: 'Information' }
];


// список ссылок в футере столбиком. ul-li. принимает массив обьектов с роутами и названиями и отдает лист ссылок
function Navigation() {
  const listItems = menus.map(({path, component, name}, key) => <li style={linkStyle} key={key}><NavLink activeStyle={{outline:'none', color: 'green'}} to={path}>{name}</NavLink></li> );
  return (
    <div style={navigationStyle}><ul>{listItems}</ul></div>
  );
}

/**
 * Footer
 */

const routes = [
	{path: '/tags', component: Tags, name: 'Tags' }, 
	{path: '/about', component: About, name: 'About' }, 
	{path: '/more', component: More, name: 'More' }
];

// список ссылок в футере столбиком. ul-li. принимает массив обьектов с роутами и названиями и отдает лист ссылок
function FooterList() {
  const listItems = routes.map(({path, component, name}, key) => <li key={key}><Link to={path}>{name}</Link></li> );
  return (
    <ul>{listItems}</ul>
  );
}

// куча роутов. 
function Main()  {
	const routeComponents = ( routes.concat(menus) ).map( ({ path, component }, key ) => 
	<Route exact path={path} component={component} key={key} />);
	return <Switch>{routeComponents}</Switch>;
}

const App = (props) => {
	return (
    	<div>
			<Navigation />
			<Main />
			<FooterList />
    	</div>
  	);
}

ReactDOM.render(<HashRouter><App/></HashRouter>, document.getElementById('root'));



How to get Navigation and Footer routers into one place. How to get Navigation and Footer routers into one place.
How to get Navigation and Footer routers into one place. How to get Navigation and Footer routers into one place.
How to get Navigation and Footer routers into one place. How to get Navigation and Footer routers into one place.