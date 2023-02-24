import { useState } from 'react'
import reactLogo from './assets/react.svg'
import List from './components/List.jsx'
import './App.css'

function App() {


  return (
	<div className='Container'>
		<List name='HIGH'/>
		<List name='LOW'/>
	</div>
  )
}

export default App
