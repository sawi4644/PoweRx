import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import HomePageCard from './HomePageCards'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
// import GetUser from './components/GetUser/getUser'



function Homepage() {

    return (
        <div>
            <Jumbotron>
                <h1>Welcome {  }</h1>
                <p>
                     PowerRx
                </p>
                <p>
                    Simpler way to fillout Rx forms, the easy step every dentist needs!
                </p>
            </Jumbotron>
           
            <HomePageCard />
        </div>
    )
}

export default Homepage