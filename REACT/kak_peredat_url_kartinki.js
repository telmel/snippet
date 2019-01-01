// Как передать данные из родительского компонента в дочерний компонент с помощью props.
var DATA = { name: 'James Brown', imgURL: 'http://lorempixel.com/100/100/' }

const App = (props) => 
	<div>
		<Profile name={props.profileData.name} imgURL={props.profileData.imgURL}/>
	</div>

const Profile = (props) =>
		<div>              
           <h3>{props.name}</h3>
           <img src={props.imgURL} />
        </div>;

ReactDOM.render(<App profileData={DATA} />, document.getElementById('root'));