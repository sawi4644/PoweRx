import React from 'react'
import Form from 'react-bootstrap/Form'
import Wrapper from '../Wrapper/wrapper'

export default function Checkbox({allPorcelain, checkUpdate}) {
    return (
      <div>
        {/* {console.log({allPorcelain})} */}
        {/* <pre>{JSON.stringify({allPorcelain}, null, 2)}</pre> */}
        {/* {Object.entries({allPorcelain}).map(pork => {
          const [
            key,
            value
          ] = pork
          return (
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type={"checkbox"}
                name={key}
                label={key}
                onChange={checkUpdate}
              />
            </Form.Group>
          )
        })} */}
    </div>

      

    )
}

