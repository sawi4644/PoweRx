import React from 'react'
import Wrapper from '../../components/Wrapper/wrapper'
import InputForm from './InputForm'
import sample from './Sample'
import Form from 'react-bootstrap/Form'
import Button from './Button'
import DateInput from './DateInput'
import './Header.css'
// import Col from 'react-bootstrap/Col'

const HeaderRxInput = () => {

  // const blankForm = () => {
  //   axios.POST('/api/header')
  // }



  return (

          <div className="divContainer">
          <Form className="FormDesign">
              {Object.entries(sample).map((sampleData) => {
                const [
                  key,
                  obj,
                ] = sampleData
                return (
                  <InputForm 
                  key={key}
                  Value={obj.Value}
                    />
                    )})}
                  <DateInput />
          </Form>
              <Button className="ButtonDesign"/>
          </div>
        
  )
}

export default HeaderRxInput