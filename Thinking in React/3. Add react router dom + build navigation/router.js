React Router v4 React Router v4 React Router v4 React Router v4 React Router v4 React Router v4 
React Router v4 React Router v4 React Router v4 React Router v4 React Router v4 React Router v4 
React Router v4 React Router v4 React Router v4 React Router v4 React Router v4 React Router v4 



import React from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route, Switch, Link} from 'react-router-dom';

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)
// The Main component renders one of the three Routes (provided that one matches).
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/service' component={Service}/>
    </Switch>
  </main>
)

// The Header creates links that can be used to navigate between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/service'>Service</Link></li>
      </ul>
    </nav>
  </header>
)

const Home = () => <h1>Welcome to Hurricane!</h1>;
const About = () => <h1>Some info about hero</h1>;
const Service = () => <h1>There are many stories</h1>;


// This demo uses a HashRouter instead of BrowserRouter because there is no server to match URLs
ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'));


React Router v4 React Router v4 React Router v4 React Router v4 React Router v4 React Router v4 
React Router v4 React Router v4 React Router v4 React Router v4 React Router v4 React Router v4 
React Router v4 React Router v4 React Router v4 React Router v4 React Router v4 React Router v4 

1. Установка React Router DOM. npm install --save react-router-dom
2. Подключение компонентов через импорт   import {HashRouter, Route, Switch, Link} from 'react-router-dom';
3. Вместо того чтобы рендерить компонент <App/> мы зарендерим компонент Router. 
Компонент Router ожидает только один элемент в качестве дочернего. 
Что бы работать в рамках этого условия, удобно создать компонент <App/> который рендерит всё ваше приложение.
BrowserRouter — следует использовать когда вы обрабатываете на сервере динамические запросы, 
а HashRouter используйте когда у вас статический веб сайт(github pages).  
ReactDOM.render(<HashRouter><App/></HashRouter>, document.getElementById('root'));
4. Все наше приложение определено в компоненте <App/>.  
Внутри будут 2 части: компонент <Header> со ссылками и компонент <Main> где будет контент.
const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)
5. Создаем компонент <Main>. Внутри нашего компонента <Main/> 
мы будем использовать компонент <Switch/> для группировки роутов и компонент <Route/>

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/service' component={Service}/>
    </Switch>
  </main>
)

Давайте добавим внутрь 3 роута. 
И дальше мы добавили новый роут с путем / и компонентом Home. 
То есть, когда мы зайдем теперь на роут / у нас зарендерится Home компонент. 
Давайте добавим еще два роута. 
Теперь если мы в браузере перейдем на урл /#/about, то мы видим, что у нас отрендерился компонент About. 
Когда мы перейдем на урл /#/service, то мы видим, что у нас зарендерился компонент Service.
Если нам нужно чтобы при переходе на ссылку #/new у нас рендерился компонент <New/> 
то желательно добавить такой роут: <Route path='/new' component={New}/>

6. Наконец, добавим в наше приложение навигацию и ссылки. 
Если мы будем создавать ссылки с использованием anchor привязки, 
нажатие на них приведет к перезагрузке всей страницы. 
React Router предоставляет компонент <Link>, чтобы это не происходило. 
При нажатии на <Link>, URL-адрес будет обновлен, и отображаемый контент изменится без перезагрузки страницы.

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/service'>Service</Link></li>
      </ul>
    </nav>
  </header>
)

7. И создадим компоненты Home, About и Service
const Home = () => <h1>Welcome to Hurricane!</h1>;
const About = () => <h1>Some info about hero</h1>;
const Service = () => <h1>There are many stories</h1>;