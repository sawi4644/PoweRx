import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function SubmitButton () {
    return (
        <Form>
            <Form>
                <Form.Group >
                    <Form.File id="exampleFormControlFile1" label="Please Select File to Attach" />
                </Form.Group>
            </Form>

            <Button variant="primary" type="submit">
                Submit
      </Button>
        </Form>
    )

}


export default SubmitButton