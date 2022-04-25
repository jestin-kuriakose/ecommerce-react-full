import React, { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleClick = (e) => {
    e.preventDefault()
  }
  return (
    <div>
        <input type="text" placeholder='Username' onChange={e => setUsername(e.target.value)}/>
        <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)}></input>
        <button onClick={handleClick}>LOGIN</button>
    </div>
  )
}

export default Login