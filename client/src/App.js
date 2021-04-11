import './App.css';
import React, { useState } from 'react'
import axios from 'axios';
import Register from './components/Register/register'
import Login from './components/Login/login'
import GetUser from './components/GetUser/getUser'




function App() {
      
  // };

  return (
    <div className='App'>
      <Register />
      <Login />
      <GetUser />
    </div>
  );
}

export default App;
