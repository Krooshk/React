import CloseIcon from '../assets/close-icon.svg'
function Input(props) {


	return (
		<label class="input-text">
	  <input type='text' placeholder={props.importance==='HIGH'?'Добавить важных дел': 'Добавить'}></input>
	  <img src={CloseIcon} alt="plus"></img>
	  </label>
	)
  }
  
  export default Input