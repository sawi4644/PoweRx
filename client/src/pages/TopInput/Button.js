import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function SubmitButton () {
    return (
    <Form>
      {/* <Button className="ButtonClass" variant="primary" type="submit">
        Submit
      </Button> */}

       <Form className="ButtonClass">
        <Form.Group >
          <Form.File  id="exampleFormControlFile1" label="" />
        </Form.Group>
      </Form>

    </Form>
    )

}


export default SubmitButton