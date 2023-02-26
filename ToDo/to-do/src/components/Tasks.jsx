
import Task from './Task.jsx'

function Tasks(props) {
	function deleteTask(task){
		props.deleteTask(task);
	}
	
	return (
	  <div>
	  {props.tasks.map((item,index)=><Task deleteTask={deleteTask} task={item.task} key={index} id={index} name={index.toString()}/>)}
	  </div>
	)
  }
  
  export default Tasks