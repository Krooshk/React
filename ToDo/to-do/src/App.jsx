import { useState } from 'react'
import reactLogo from './assets/react.svg'
import List from './components/List.jsx'
import './App.css'

function App() {

const [lowTasks,setLowTasks]=useState([{task:'Посмотреть в окно',done:false},{task:'Почесать спину', done:false},{task:'Выпить пива', done:false}]);
const [highTasks,setHighTasks]=useState([{task:'Переписать ToDo на рект',done:false},{task:'Посмотреть ролик о TS',done:false},{task:'Применить useEffect в todo',done:false},{task:'Добавить сохранение результатов в localstorage',done:false}]);


// useEffect(() => {});

function addTask(input,name){
	(name==='HIGH'?setHighTasks:setLowTasks)(oldArray=>[...oldArray,{task:input,done:false}]);
	console.log(input);
}

function deleteTask(task,name){
	(name==='HIGH'?setHighTasks:setLowTasks)(oldArray=>[...oldArray.filter((element)=>element.task!==task)]);
}



  return (
	<div className='Container'>
		<List name='HIGH' tasks={highTasks} addTask={addTask} deleteTask={deleteTask}/>
		<List name='LOW' tasks={lowTasks} addTask={addTask} deleteTask={deleteTask}/>
	</div>
  )
}

export default App
