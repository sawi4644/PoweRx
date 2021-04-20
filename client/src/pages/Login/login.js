import React, { useState } from 'react'
import axios from 'axios';
import {
  Link,
  useLocation
} from "react-router-dom";
import Button from 'react-bootstrap/Button'
import Wrapper from '../../components/Wrapper/wrapper'

const Login = () => {
    
  const [loginUsername, setLoginUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

	const login = () => {
    axios({
      method: 'POST',
      data: {
      username: loginUsername,
      password: loginPassword
    },
    withCredentials: true,
    url: "http://localhost:3001/login"
    })
    .then(res => console.log(res))
  };

	return (
    <Wrapper>
      <div>
        <h1>Login</h1>
        <input placeholder='username' onChange={e => setLoginUsername(e.target.value)}/>
        <input placeholder='password' onChange={e => setLoginPassword(e.target.value)}/>
        <button onClick={login}>submit</button>
        <br/>
        <br/>
        <Button><Link to="/register"style={{color: "white"}} >Register</Link></Button>
        <br/>
        <br/>
        <Button><Link to="/homepage"style={{color: "white"}} >Homepage</Link></Button>
      </div>
    </Wrapper>
	)

}


export default Login