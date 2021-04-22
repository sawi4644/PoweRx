import './index.css';
import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import Historyt from './pages/historyT';
import Dropdown from './components/Dropdown';
import RxForm from './components/RxForm/rxForm'
import HeaderRxInput from './components/TopInput/HeaderRxInput'
import Signup from '../src/components/SignUp/SignUp'
import Dashboard from '../src/components/Dashboard/Dashboard'
import Login from '../src/components/Login/Login'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import ForgotPassword from './components/ForgotPassword/ForgotPassword'
import UpdateProfile from './components/UpdateProfile/UpdateProfile'
import { AuthProvider } from './contexts/AuthContext'
import { Container } from 'react-bootstrap'
// random comment so i can push code



function App() {
  const [isOpen, setIsOpen]= useState(false)

  const toggle = ()=>{
    setIsOpen(!isOpen)
  }
  
  useEffect(()=>{
    const hideMenu= ()=>{
      if (window.innerWidth> 760 && isOpen){
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', hideMenu)

    return ()=>{
      window.removeEventListener('resize', hideMenu)
    }
  })
  return (
    <Router>
      <AuthProvider>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vH" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute
                exact
                path="/update-profile"
                component={UpdateProfile}
              />
              <PrivateRoute exact path="/form" component={RxForm} />
              <PrivateRoute exact path="/about" component={About} />
              <PrivateRoute exact path="/history" component={Historyt} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </div>
        </Container>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
