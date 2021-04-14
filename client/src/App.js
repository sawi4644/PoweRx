import './App.css';
import React from 'react'
import Homepage from '../src/pages/Homepage/Homepage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Register from './pages/Register/register'
import Login from './pages/Login/login'
import TopInput from './pages/TopInput/TopInput'

function App() {
      
  return (
    // <Router>
    //   <div>
    //     <Switch>
    //       <Route path="/register">
    //         <Register/>
    //       </Route>
    //       <Route path="/login">
    //         <Login/>
    //       </Route>
    //       <Route path="/homepage">
    //         <Homepage/>
    //       </Route>
    //       <Route path="/">
    //         <Register/>
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
    // // <div className='App'>
    // //   <Homepage />
    // // </div>

    <div>
      <TopInput />
    </div>
  );
}

export default App;
