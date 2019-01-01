// Как создать компонент с помощью функции (самый простой способ)
function Welcome() {
  return <h1>Hello</h1>;
}

// Как создать / обьявить компонент с помощью arrow function
const Module = (props) => <div>Hello {props.name}</div>;
const Header = (props) => <div style={headerStyle}></div>;
const Navigation = (props) => <div style={navigationStyle}></div>;
const Main = (props) => <div style={mainStyle}></div>;
const Footer = (props) => <div style={footerStyle}></div>;
// Этот компонент - функция, она принимает один аргумент - обьект "props" с данными
// Эта функция возвращает React-элемент


// Как создать компонент используя класс ES6 ( define a component ) отнаследовать от React.Component
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}