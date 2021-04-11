import './App.css';
import React, { useState } from 'react'
import axios from 'axios';
import Login from './components/Login/login'
import GetUser from './components/GetUser/getUser'

// import Login from '../src/components/Login/Login'



function App() {
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

      
  // };

  return (

    <div className='App'>
      <div>
        <h1>Register</h1>
        <input placeholder='username' onChange={e => setRegisterUsername(e.target.value)}/>
        <input placeholder='password' onChange={e => setRegisterPassword(e.target.value)}/>
        <button onClick={register}>submit</button>
      </div>

      <Login />

      


      <GetUser />

   


    </div>
    





  );
}

export default App;
