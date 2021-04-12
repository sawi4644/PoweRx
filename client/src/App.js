import './App.css';
import React, { useState } from 'react'
import axios from 'axios';
import Register from './components/Register/register'
import Login from './components/Login/login'
import GetUser from './components/GetUser/getUser'
import Homepage from '../src/pages/Homepage/Homepage'




function App() {
      
  return (
    <div className='App'>

      <Homepage />


      {/* <Register />
      <Login />
      <GetUser /> */}
    </div>
  );
}

export default App;
