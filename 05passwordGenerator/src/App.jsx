import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength ] = useState(8)
  const [numallowed, setNumallowed] = useState(false)
  const [charallowed, setCharallowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numallowed) str += "0123456789"
    if (charallowed) str += "!@#$%^&*_+-={}?"

    for (let i = 1; i <= length; i++) {
     let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numallowed, charallowed, setPassword])

  const copypasswordToClipBoard = useCallback( () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect( () => {
    passwordGenerator()
  } ,[length,numallowed,charallowed,passwordGenerator] )

  return (
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-2xl px-4 my-8 text-orange-500 bg-gray-700'>
       <h1 className='text-3xl text-center text-white'>password generator</h1>
      <div className='flex shadow rounded-2xl overflow-hidden mb-4'>  
          <input 
             type="text"
             value={password}
             className='outline-none w-full py-1 px-3'
             placeholder="password"
             readOnly
             ref={passwordRef}
          />
          <button onClick={copypasswordToClipBoard}> copy</button>
          <div>
            <input type="range" min={8} max={100} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}      />
            <label> length {length}</label>
          </div>
          <div>
            <input type="checkbox"
            defaultChecked={numallowed}
            id='numberInput'
            onChange={ () => {
              setNumallowed((prev) => !prev);
            }}
            />
            <label htmlFor="numberinput">Number</label>
          </div>
          <input type="checkbox" defaultChecked={charallowed} id='charinput' onChange={ () => {setCharallowed( (prev) =>!prev )}} />
          <label htmlFor="charinput">Character</label>
      </div>

     </div>
    
  )
}

export default App
