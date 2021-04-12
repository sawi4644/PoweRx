import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Register from './pages/Register/register'
import Login from './pages/Login/login'



function App() {
      
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Register/>
          </Route>
        </Switch>
      </div>
    </Router>
    // <div className='App'>
    //   <LoginPage />
    // </div>
  );
}

export default App;
