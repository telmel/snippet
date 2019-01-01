import React from "react";
import ReactDOM from "react-dom";
import PRODUCTS from './common.json';

const Visual = (props) => {
	const mainStyle = {
		backgroundColor: "#fff",
		height: '200px',
		textAlign: 'center'
	};
	return (
		<div style={mainStyle}>
			<img src={props.products[props.count].imgURL} />
		</div>
	);
}


const EnglishVersion = (props) => {
	const englishStyle = {
		backgroundColor: "#F2F2F2",
		color: '#000',
		height: '50px',
		textAlign: 'center',
		fontSize: '35px',
		height: '50px',
		lineHeight: '50px',
		textTransform: 'uppercase'
	};
	return (
		<div style={englishStyle}>
			{props.products[props.count].word}
		</div>
	);
}

const RussianVersion = (props) => {
	const russianStyle = {
		backgroundColor: "#F2F2F2",
		color: '#000',
		height: '50px',
		textAlign: 'center',
		fontSize: '35px',
		height: '50px',
		lineHeight: '50px',
		textTransform: 'uppercase'
	};
	return (
		<div style={russianStyle}>
			{props.products[props.count].translation}
		</div>
	);
}


var divStyle = { outline:'none', backgroundColor: '#bec4ce', textAlign:'left', width:'100%',height:'200px', border:'none',borderRadius:'4',fontSize:'22px' };
const generalStyle = {	padding: '0px 50px', color: '#555', fontSize:'12px'};
const containerStyle = { border: '0px dashed black', padding: '0px', backgroundColor: "#fff" };

class DisplayBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isChecked: true, isGalochkin: true, count: 0 };
		this.toggleState = this.toggleState.bind(this);
		this.toggler = this.toggler.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	toggleState() {
		this.setState({ isChecked: !this.state.isChecked });
	}
	
	toggler() {
		this.setState({ isGalochkin: !this.state.isGalochkin });
	}
	
	
	handleClick(){
	  if (this.state.count === PRODUCTS.length - 1) { 
		this.setState({ count: 0 }) 
	  }
	  else {
		this.setState({ count: this.state.count + 1 })
	  }
	}

	render() {
	let dropdownText;
	let nashe;
	if (this.state.isChecked){ dropdownText = <EnglishVersion products={this.props.products} count={this.state.count} />; }
	if (this.state.isGalochkin){ nashe = <RussianVersion products={this.props.products} count={this.state.count} />; }
    return (
		<div style={generalStyle}>
    		<div style={containerStyle}>
				<input type="checkbox" checked={this.state.isChecked} onChange={this.toggleState} />
				show english version
				<br/>
				<input type="checkbox" checked={this.state.isGalochkin} onChange={this.toggler} />
				show russian version
				<Visual products={this.props.products} count={this.state.count} />
				{dropdownText}
				{nashe}
				<button style={divStyle} onClick={this.handleClick}>WORD {this.state.count}</button>
			</div>
		</div>
		);
	}
}

ReactDOM.render(<DisplayBox products={PRODUCTS}/>, document.getElementById('root'));





