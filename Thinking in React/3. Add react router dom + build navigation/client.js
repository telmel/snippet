import React from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route, Switch, Link} from 'react-router-dom';

const App = (props) => {
	const generalStyle = {	backgroundColor: "#BDBDBB", padding: '0px 50px', fontFamily: 'sans-serif' };
	var containerStyle = { 	border: '3px dashed black', paddingTop: '40px', paddingBottom: '50px' };
	return (
    	<div style={generalStyle}>
    		<div style={containerStyle}>
				<Header />
				<Navigation />
				<Main />
				<Footer/>
			</div>
    	</div>
  	);
}


const Header = (props) => {
	const headerStyle = {
		backgroundColor: "#213D62",
		height: '200px'
	};
	return (
		<div style={headerStyle}>
		</div>
	);
}


const Navigation = (props) => {
	const navigationStyle = {
		backgroundColor: "#000",
		height: '45px'
	};
	return (
		<div style={navigationStyle}>
        	<li style={liStyle}><Link style={linkStyle} to='/'>Home</Link></li>
        	<li style={liStyle}><Link style={linkStyle} to='/service'>Service</Link></li>
        	<li style={liStyle}><Link style={linkStyle} to='/delivery'>Delivery</Link></li>
        	<li style={liStyle}><Link style={linkStyle} to='/contacts'>Contacts</Link></li>
        	<li style={liStyle}><Link style={linkStyle} to='/partners'>Partners</Link></li>
        	<li style={liStyle}><Link style={linkStyle} to='/about'>About</Link></li>
		</div>
	);
}

var linkStyle = {
	fontSize: '22px',
	fontFamily: 'sans-serif',
	height:'45px',
	lineHeight: '45px',
	color: '#e3e3e1',
    padding: '0 10px',
	textDecoration: 'none',
	textTransform: 'uppercase'
};

var liStyle = {
	listStyleType: 'none',
	float: 'left',
	display: 'inline-block'
};

const Main = (props) => {
	const mainStyle = {
		backgroundColor: "#fff",
		height: '700px'
	};
	return (
		<div style={mainStyle}>
			<Switch>
      		<Route exact path='/' component={Home}/>
      		<Route path='/service' component={Service}/>
      		<Route path='/delivery' component={Delivery}/>
      		<Route path='/contacts' component={Contacts}/>
      		<Route path='/partners' component={Partners}/>
      		<Route path='/about' component={About}/>
    		</Switch>
		</div>
	);
}



const Footer = (props) => {
	const footerStyle = {
		backgroundColor: "#172223",
		height: '300px'
	};
	return (
		<div style={footerStyle}>
		</div>
	);
}


const Home = () => <div>Welcome to Hurricane!</div>;
const Service = () => <div>We provide many services</div>;
const Delivery = () => <div>Delivery time is very small</div>;
const Contacts = () => <div>Our address is Russia</div>;
const Partners = () => <div>Our partners are crazy</div>;
const About = () => <div>One of the best companies on the coast</div>;

ReactDOM.render(<HashRouter><App/></HashRouter>, document.getElementById('root'));