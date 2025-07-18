import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-700 text-black rounded-2xl p-4' > Tailwind test</h1>
      <Card username="aanchal" job="social mdeia"  />
      <Card  username="ayush"  job="software enginer " />
    </>
  )
}

export default App
