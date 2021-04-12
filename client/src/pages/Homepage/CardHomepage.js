import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';


function CardHomepage(props) {
    return (
    <Container>
        <row>
            <Col xs>
            <Card style={{ width: '18rem' }}>
                     <Card.Body>
                     <Card.Title>Rx Form</Card.Title>
                <Card.Img variant="top" src="holder.js/100px180" />
                     <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                     </Card.Text>
                 <Button variant="primary">Go to RX Form</Button>
             </Card.Body>
             </Card>
            </Col>
        </row>
    </Container>
    )
}

export default CardHomepage