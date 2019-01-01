const App = (props) => {
	const generalStyle = {	backgroundColor: "#BDBDBB", padding: '0px 50px' };
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
		</div>
	);
}

const Main = (props) => {
	const mainStyle = {
		backgroundColor: "#fff",
		height: '500px'
	};
	return (
		<div style={mainStyle}>
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

ReactDOM.render(<App/>, document.getElementById('root'));