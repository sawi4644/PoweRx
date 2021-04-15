import React, {useState, useEffect} from 'react'
import Wrapper from '../../components/Wrapper/wrapper'
import Row from '../../components/Row/row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import sampleData from './sampleData'
import API from '../../utils/API'

const RxForm = () => {

  console.log(sampleData)

  const [form, setForm] = useState(sampleData)

  const save = (e) => {
    e.preventDefault()
    API.saveFormData(form)
    .then(data => {
      console.log(data)
    })
    .catch(err => console.log(err))
  }


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
            <Form.Check key={key} type="checkbox" label={obj.name} />
          )})}
          {/* <Form.Check type="checkbox" label="Layered EMAX" />
          <Form.Check type="checkbox" label="Mono EMAX" />
          <Form.Check type="checkbox" label="Layered Zirconia" />
          <Form.Check type="checkbox" label="Mono Zirconia" />
          <Form.Check type="checkbox" label="Composite" /> */}
        </Form.Group>
        <Button variant="primary" type="submit" onClick={save}>
          Submit
        </Button>
      </Form>
    </Wrapper>
  );

}

export default RxForm