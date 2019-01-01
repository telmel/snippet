// Как добавить в компонент состояние в самом простом виде
class App extends React.Component {
  constructor() {
    super();
    this.state = { color:'lavender' };
  }

  repaint(){
	  this.setState({ color: 'azure' });
  };

  render() {
    return <div style={{backgroundColor: this.state.color}} onClick={this.repaint.bind(this)}>here</div>;
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));