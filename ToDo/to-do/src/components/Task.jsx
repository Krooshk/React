import CloseIcon from '../assets/close-icon.svg';

function Task(props) {


	return (
		<label class="checkbox">
		<input type="checkbox" class="checkbox-round" name='1' value="yes"/>{props.task}
		<img src={CloseIcon} alt="close"></img>
		</label>
	)
  }
  
  export default Task