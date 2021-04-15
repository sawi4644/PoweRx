import React from 'react'
import Wrapper from '../../components/Wrapper/wrapper'
import InputForm from './InputForm'
import sample from './Sample'
import Form from 'react-bootstrap/Form'
import Button from './Button'
import DateInput from './DateInput'
// import Col from 'react-bootstrap/Col'

const HeaderRxInput = () => {

  // const blankForm = () => {
  //   axios.POST()
  // }



  return (

          <Wrapper className="InputStyles">
          <Form>
              {Object.entries(sample).map((sampleData) => {
                const [
                  key,
                  obj,
                ] = sampleData
                return (
                  <InputForm
                  key={key}
                  Value={obj.Value}
                  FieldLabel={obj.FieldLabel}
                    />
                    )})}
                  <DateInput />
          </Form>
              <Button/>
          </Wrapper>
        
  )
}

export default HeaderRxInput