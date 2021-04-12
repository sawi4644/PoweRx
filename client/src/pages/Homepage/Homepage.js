import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import HomePageCard from './CardHomepage'
import Information from './Information.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


console.log(Information)

const Homepage = () => {

        return(
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

            <HomePageCard />

            <HomePageCard />

    </div>
  )
       
  
}

export default Homepage