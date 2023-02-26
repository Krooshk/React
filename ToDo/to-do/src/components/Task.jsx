import CloseIcon from '../assets/close-icon-45.svg';

function Task(props) {

	function deleteTask(event){
		event.stopPropagation();
		props.deleteTask(props.task);
	}


	return (
		<div className='taskElement'>
		<label className="checkbox">
		<input type="checkbox" className="checkbox-round" name={props.name} value="yes"/>{props.task}
		</label>
		<div className='iconClose' onClick={deleteTask} ><img src={CloseIcon}  alt="close"></img></div>
		</div>
	)
  }
  
  export default Task