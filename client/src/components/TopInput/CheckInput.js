import React, { useState, useEffect, useContext, } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import API from '../../utils/API'
function CheckInput (props) {
    return (
    <Form style={{ marginTop: 10 }}>
            {Object.entries(props.attachedItems).map(Item => {
        const [
          key,
          value
        ] = Item
        return (
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type={"checkbox"}
              name={key}
              label={key}
              onChange={props.toggleItems}
            />
          </Form.Group> 
        )
        })}     
     </Form>
    )}
export default CheckInput