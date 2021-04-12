import React from 'react'
import Register from '../../components/Register/register'
import Login from '../../components/Login/login'
import GetUser from '../../components/GetUser/getUser'

const LoginPage = () => {
  return(
    <div>
      <Register />
      <Login />
      <GetUser />
    </div>
  )
}

export default LoginPage