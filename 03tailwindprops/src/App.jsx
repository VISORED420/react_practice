import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'



function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: 'vaibhav',
    age: 21,
    address: {
      city: 'faridabad',
      state: 'haryana',
      country: ' India'
    }
  }

  let newArr = [1,2,3,4,5,6,7,8]

  return (
    <>
      <Card username = 'vaibhav' Post='sex' myarr = {newArr}/>
      <Card />
      <Card />
      <Card />

  </>
  )
}

export default App
