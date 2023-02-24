
import Input from './Input.jsx';
import Tasks from './Tasks.jsx'

function List(props) {


	return (
	  <div>
	  <h3>{props.name}</h3>
	  <Input importance={props.name}/>
	  <Tasks/>
	  </div>
	)
  }
  
  export default List