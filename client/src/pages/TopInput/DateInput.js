import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'


function DateInput (props) {
    return (

      <Form>
        <Form.Row>
          <Form.Group Id={props.Id} controlId="text" as={Col}>
            <Form.Label FieldLabel={props.FieldLabel}>{props.Value}</Form.Label>
            <Form.Control className="DateInputClass" type="date" placeholder="Docters account #" />
          </Form.Group>
       
          <Form.Group Id={props.Id} as={Col}>
            <Form.Label FieldLabel={props.FieldLabel}>{props.Value}</Form.Label>
            <Form.Control className="DateInputClass" type="date" placeholder="Docters account #" />
          </Form.Group>
        </Form.Row>
        </Form>
           
    )
}

export default DateInput