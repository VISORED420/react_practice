import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount]= useState(0)
 
  function add(){
    setCount(count1 => count1 + 1) 
    setCount(count1 => count1 + 1) 
    setCount(count1 => count1 + 1) 
    setCount(count1 => count1 + 1) 
  
  }

  const add1 =()=> {

  }
  return (
    <div>
        <h1>React course with britney spears</h1>
        <h2>counter value : {count} </h2>
        <button
          onClick= {add}
        >add value </button> {"     "}

        <button onClick = {()=>{setCount(count => count -1)}}> decrease value</button>

    </div>
  )
}

export default App
