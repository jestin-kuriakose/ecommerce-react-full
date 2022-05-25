import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from "../../redux/apiCalls"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    login(dispatch, {username, password})
    navigate('/');
  }
  return (
    <div style= {{display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100vh"}}>
        <input style= {{padding: 10,
                        marginBottom: 20,
                        }}
                type="text" 
                placeholder='Username' 
                onChange={e => setUsername(e.target.value)}/>
        <input style= {{padding: 10,
                        marginBottom: 20,}}
                type="password" 
                placeholder='Password' 
                onChange={e => setPassword(e.target.value)}></input>
        <button style= {{padding: 10,
                          width: 100}} 
                          onClick={handleClick}>LOGIN</button>
    </div>
  )
}

export default Login