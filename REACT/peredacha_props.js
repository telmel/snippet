// Как передать в компонент параметр
const Module = (props) => <div>Hello {props.name}</div>;
ReactDOM.render(<Module name="World" />, document.getElementById("root"));