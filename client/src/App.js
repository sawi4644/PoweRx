import './App.css';
import React, { useState } from 'react'
// import Login from '../src/components/Login/Login'


function App() {
  const [registerUsername, setRegisterUsername] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [loginUsername, setLoginUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const register = () => {};
  const login = () => {};
  const getUser = () => {};

  return (

    <div className='App'>
      <div>
        <h1>Register</h1>
        <input placeholder='username' onChange={e => setRegisterUsername(e.target.value)}/>
        <input placeholder='password' onChange={e => setRegisterPassword(e.target.value)}/>
        <button onclick={register}>submit</button>
      </div>

      <div>
        <h1>Login</h1>
        <input placeholder='username' onChange={e => setLoginUsername(e.target.value)}/>
        <input placeholder='password' onChange={e => setLoginPassword(e.target.value)}/>
        <button onclick={login}>submit</button>
      </div>

      <div>
        <h1>Get User</h1>
        <button onclick={getUser}>submit</button>
      </div>



    </div>
    





  );
}

export default App;
