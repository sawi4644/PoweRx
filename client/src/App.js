import './App.css';
import React, { useState } from 'react'
import axios from 'axios';
// import Login from '../src/components/Login/Login'



function App() {
  const [registerUsername, setRegisterUsername] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [loginUsername, setLoginUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
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
  const getUser = () => {
    axios({
      method: 'POST',
      withCredentials: true,
      url: "http://localhost:3001/getUser"
    })
    .then(res => console.log(res))
  };

  return (

    <div className='App'>
      <div>
        <h1>Register</h1>
        <input placeholder='username' onChange={e => setRegisterUsername(e.target.value)}/>
        <input placeholder='password' onChange={e => setRegisterPassword(e.target.value)}/>
        <button onClick={register}>submit</button>
      </div>

      <div>
        <h1>Login</h1>
        <input placeholder='username' onChange={e => setLoginUsername(e.target.value)}/>
        <input placeholder='password' onChange={e => setLoginPassword(e.target.value)}/>
        <button onClick={login}>submit</button>
      </div>

      <div>
        <h1>Get User</h1>
        <button onClick={getUser}>submit</button>
      </div>



    </div>
    





  );
}

export default App;
