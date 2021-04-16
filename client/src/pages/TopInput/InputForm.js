import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function InputForm (props) {
    return (
      <Form>
        <Form.Row>
          <Form.Group Id={props.Id}  as={Col}>
            <Form.Label ></Form.Label>
            <Form.Control FieldLabel={props.FieldLabel} className="FormContainer" type="text" placeholder={props.FieldLabel} />
          </Form.Group>
       
        </Form.Row>
        </Form>
           
    )
}

export default InputForm




 