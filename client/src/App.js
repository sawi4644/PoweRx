import './App.css';
import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Historyt from './pages/historyT';
import Rxformfill from './pages/rxformfill';
import Dropdown from './components/Dropdown';



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
  return(
      <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component= {Home}/>
        <Route path="/about" exact component= {About}/>
        <Route path="/history" exact component= {Historyt}/>
        <Route path="/rxform" exact component= {Rxformfill}/>
        
      </Switch>
      <Footer />
      </>
  );
}

export default App;
