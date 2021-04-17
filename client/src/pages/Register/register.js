import React, { useState } from 'react'
import axios from 'axios';
import {
  Link,
  useLocation
} from "react-router-dom";
import Button from 'react-bootstrap/Button'

import Wrapper from '../../components/Wrapper/wrapper'

const Register = () => {

  const [registerUsername, setRegisterUsername] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')

  const register = () => {
    axios({
      method: 'POST',
      data: {
      username: registerUsername,
      password: registerPassword
    },
    withCredentials: true,
    url: "http://localhost:3001/register"
    })
    .then(res => console.log(res))
  };

  return (
    <Wrapper>
      <div>
        <h1>Register</h1>
        <input placeholder='username' onChange={e => setRegisterUsername(e.target.value)}/>
        <input placeholder='password' onChange={e => setRegisterPassword(e.target.value)}/>
        <button onClick={register}>submit</button>
        <br/>
        <br/>
        <Button><Link to="/login"style={{color: "white"}} >login</Link></Button>
        <br/>
        <br/>
        <Button><Link to="/homepage"style={{color: "white"}} >Homepage</Link></Button>
      </div>
    </Wrapper>
  )

}

export default Register