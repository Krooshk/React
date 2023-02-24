
import Task from './Task.jsx'

function Tasks(props) {
const array=['дело1','дело2','дело3','дело4','дело5'];
	
	return (
	  <div>
	  {array.map((item)=><Task task={item}/>)}
	  </div>
	)
  }
  
  export default Tasks