import React, {} from 'react'
import Wrapper from '../../components/Wrapper/wrapper'
import Row from '../../components/Row/row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import sampleData from './sampleData'

const RxForm = () => {

  console.log(sampleData)


  return (
    <Wrapper>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Shade</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Stump Shade</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          {Object.entries(sampleData).map((sData) => {
            const [
              key,
              obj,
            ] = sData

            console.log(sData)
            return(
            <Form.Check  type="checkbox" label={obj.name} />
          )})}
          {/* <Form.Check type="checkbox" label="Layered EMAX" />
          <Form.Check type="checkbox" label="Mono EMAX" />
          <Form.Check type="checkbox" label="Layered Zirconia" />
          <Form.Check type="checkbox" label="Mono Zirconia" />
          <Form.Check type="checkbox" label="Composite" /> */}
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Wrapper>
  );

}

export default RxForm