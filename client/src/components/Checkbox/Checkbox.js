import React from 'react'
import Form from 'react-bootstrap/Form'

export default function Checkbox(props) {
    return (

        


        <div>

        <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          name="techRec"
          label="Tech Recommendation"
          onChange={props.checkUpdate}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          name="layeredEmax"
          label="Layered EMAX"
          onChange={props.checkUpdate}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" name="monoEmax" label="Mono Emax" onChange={props.checkUpdate} />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          name="LayeredZirconia"
          label="Layered Zirconia"
          onChange={props.checkUpdate}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          name="monoZirconia"
          label="Mono Zirconia"
          onChange={props.checkUpdate}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" name="composite" label="Composite" onChange={props.checkUpdate} />
      </Form.Group>

      </div>


      

    )
}

