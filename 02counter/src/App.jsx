import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  let [counter, setCounter] = useState(0)

  // let counter = 0
  const addValue = () => {
    // console.log("clicked", counter);
    
    if (counter < 3) {
      counter = counter + 1
      setCounter(counter)
    } else {
      setCounter(counter=3)
    }
  }
  const removeValue = () => {
    
    if (counter > 0) {
      counter = counter - 1
      
    } else {
      setCounter(counter=0)
    }
    setCounter(counter)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button 
      onClick={removeValue}
      >Remove value {counter} </button>
      <footer>{counter}</footer>
    </>
  )
}

export default App
