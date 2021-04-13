import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import HomePageCard from './CardHomepage'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Info from './Infomation.json'

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

            <div className="row">
            {Info.map(({ id, CardTitle, Image, Description}) =>  {
                return (
                 <div key={id}  className="col-sm-12 col-md-4 d-flex justify-content-center">
                    <HomePageCard 
                    CardTitle={CardTitle}
                    Image={Image}
                    Description={Description}/>
                 </div>
                );
            })}
             </div>
    </div>
  )
       
  
}

export default Homepage