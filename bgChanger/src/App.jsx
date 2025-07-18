import { useState } from "react"


function App() {
  const [color, setColor] = useState('grey')

  return (
    <div className="w-full h-screen duration-200 "
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 "> 
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white p-4 rounded-3xl ">
          <button onClick={ () => setColor("red") } className="outline-none px-3 py-1 rounded-2xl text-white shadow-lg " style={{background: "red"}}>Red</button>
          <button onClick={ () => setColor("blue") } className="outline-none px-3 py-1 rounded-2xl text-white shadow-lg " style={{background: "blue"}}>Blue</button>
          <button onClick={ () => setColor("yellow") } className="outline-none px-3 py-1 rounded-2xl text-white shadow-lg " style={{background: "yellow"}}>Yellow</button>
          <button onClick={ () => setColor("purple") } className="outline-none px-3 py-1 rounded-2xl text-white shadow-lg " style={{background: "purple"}}>purple</button>
          <button onClick={ () => setColor("green") } className="outline-none px-3 py-1 rounded-2xl text-white shadow-lg " style={{background: "green"}}>Green</button>
        </div>

      </div>
    </div>
  )
}

export default App
