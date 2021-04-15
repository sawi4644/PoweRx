import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Information from './Information'


function CardHomepage(props) {
    return (
            <Card style={{ width: '18rem' }}>
                     <Card.Body>
                     <Card.Title cardTitle={props.CardTitle}>{props.CardTitle}</Card.Title>
                <Card.Img variant="top" src={props.Image} Image={props.Image}/>
                     <Card.Text description={props.Description}>
                                {props.Description}
                     </Card.Text>
                 <Button variant="primary">Go to {props.CardTitle}</Button>
             </Card.Body>
             </Card>
    )
}

export default CardHomepage