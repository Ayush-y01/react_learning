import React, {useState, useContext} from "react";
import userContext from "../context/UserContext";
import UserContextProvider from "../context/UserContextProvider";


function Login() {
    const [username, setUsername ] = useState('')
    const [Password, setPassword ] = useState('')

    const {setUser} = useContext(userContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, Password})
    }
    return ( 
    <div>
        <h2>Login</h2>
        <input type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username...." />
        <input type="text"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password...." />
        <button onClick={handleSubmit}>Submit</button>

    </div> );
}

export default Login;