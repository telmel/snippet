


// Simple checkbox example
// Changes state and renders div if checked, removes div when unchecked

var DATA = 'table';

class CheckBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isChecked: true };
		this.toggleState = this.toggleState.bind(this);
	}
	toggleState() {
		this.setState({ isChecked: !this.state.isChecked });
	}

	render() {
	let dropdownText;
	if (this.state.isChecked){ dropdownText = <div>{this.props.label}</div>; }
    return (
		<div>
			<input type="checkbox" checked={this.state.isChecked} onChange={this.toggleState} />
			show russian version
			{dropdownText}
		</div>
		);
	}
}

ReactDOM.render(<CheckBox label={DATA}/>, document.getElementById('root'));