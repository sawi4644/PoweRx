import React from 'react'
import { Container } from 'react-bootstrap'
import Homepage from '../src/pages/Homepage/Homepage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './pages/Register/register'
// import Login from './pages/Login/login'
import RxForm from './pages/RxForm/rxForm'
import History from '../src/pages/History/history'
import { FormProvider } from './contexts/AuthContext';
import HeaderRxInput from './pages/TopInput/HeaderRxInput'
import Signup from '../src/components/SignUp/SignUp'
import { AuthProvider } from './contexts/AuthContext'
import Dashboard from '../src/components/Dashboard/Dashboard'
import Login from '../src/components/Login/Login'

function App() {
      
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vH" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  ); 

  // return (
  //   <Router>
  //     <div>
  //       <Switch>
  //         <Route path="/register">
  //           <Register />
  //         </Route>
  //         <Route path="/login">
  //           <Login />
  //         </Route>
  //         <Route path="/homepage">
  //           <Homepage />
  //         </Route>
  //         <Route path="/form">
  //           <HeaderRxInput />
  //           <RxForm />
  //         </Route>
  //         <Route path="/history">
  //           <History />
  //         </Route>
  //         <Route path="/">
  //           <Register />
  //         </Route>
  //       </Switch>
  //     </div>
  //   </Router>
    // <div className='App'>
    //   <HeaderRxInput />
    //   <RxForm />
    // </div>
  // );
}

export default App;
