import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function InputForm (props) {
    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="DocAccount">
            <Form.Label>Doctors Account #</Form.Label>
            <Form.Control type="AccountNumber" placeholder="Enter Account Number " />
          </Form.Group>

          <Form.Group as={Col} controlId="PhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="Phone Number" placeholder="Enter Phone Number" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="DocName">
            <Form.Label>Doctor Name</Form.Label>
            <Form.Control type="Name" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="Office">
            <Form.Label>Office</Form.Label>
            <Form.Control type="Office" placeholder="Enter Doctor Office" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="Patient FirstName">
            <Form.Label>Patient FirstName</Form.Label>
            <Form.Control type="Patient FirstName" placeholder="Enter Patient FirstName" />
          </Form.Group>

          <Form.Group as={Col} controlId="Patient LastName">
            <Form.Label>Patient LastName</Form.Label>
            <Form.Control type="Patient LastName" placeholder="Enter Patient LastName" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="Date Sent">
            <Form.Label>Date Sent</Form.Label>
            <Form.Control type="Date" placeholder="Please enter Date" />
          </Form.Group>

          <Form.Group as={Col} controlId="Date Due in Office">
            <Form.Label>Date of Return</Form.Label>
            <Form.Control type="Date" placeholder="Date Due in the Office" />
          </Form.Group>
        </Form.Row>

        <Form>
          <Form.Group>
            <Form.File id="exampleFormControlFile1" label="Please Select File to Attach" />
          </Form.Group>
        </Form>

        <Button variant="primary" type="submit">
          Submit
 </Button>

 
      </Form>
           
    )
}

export default InputForm




 