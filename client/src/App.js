import React from 'react'
import { Container } from 'react-bootstrap'
import Homepage from './components/Homepage/Homepage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Login from './pages/Login/login'
import RxForm from './components/RxForm/rxForm'
import { FormProvider } from './contexts/AuthContext';
import HeaderRxInput from './components/TopInput/HeaderRxInput'
import Signup from '../src/components/SignUp/SignUp'
import { AuthProvider } from './contexts/AuthContext'
import Dashboard from '../src/components/Dashboard/Dashboard'
import Login from '../src/components/Login/Login'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import ForgotPassword from './components/ForgotPassword/ForgotPassword'
import UpdateProfile from './components/UpdateProfile/UpdateProfile'

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
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute exact path="/update-profile" component={UpdateProfile} />
              <PrivateRoute exact path="/form" component={RxForm} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
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
