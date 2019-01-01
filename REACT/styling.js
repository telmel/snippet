//STYLING
// Можно добавить в <head> такие стили
<style>
button { width: 100px; height:30px; border-radius: 4px; margin:50px; }
</style>


// Как раскрасить свой компонент 
var divStyle = { background: '#cccccc', padding: "20px" };
const Module = (props) => <div style={divStyle}>Hello</div>;
