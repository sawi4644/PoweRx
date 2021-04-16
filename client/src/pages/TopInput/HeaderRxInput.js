import React from 'react'
import Wrapper from '../../components/Wrapper/wrapper'
import InputForm from './InputForm'
import sample from './Sample'
import sample2 from './Sample2'
import Form from 'react-bootstrap/Form'
import Button from './Button'
import DateInput from './DateInput'
import './Header.css'
// import Col from 'react-bootstrap/Col'

const HeaderRxInput = () => {

  // const [HeaderInput, setHeaderInput] = useState([])

  // useEffect(() => {
  //   API.GetHeaderInput()
  //     .then(response => setHeaderInput(response.data))
  //     .catch(err => console.log(err))
  // }, [])


  return (
          <>
          <Form className="FormDesign">
              {Object.entries(sample).map((sampleData) => {
                const [
                  key,
                  obj,
                ] = sampleData
                return (
                  <InputForm 
                  key={key}
                  placeholder={obj.FieldLabel}
                  FieldLabel={obj.FieldLabel}
                    />
                    )})}
                  <DateInput />
                  <DateInput />
          </Form>

          {/* <Form className="FormDesign">
              {Object.entries(sample2).map((sampleD) => {
                const [
                  key,
                  obj,
                ] = sampleD
                return (
                  <InputForm 
                  key={key}
                  placeholder={obj.FieldLabel}
                  FieldLabel={obj.FieldLabel}
                    />
                    )})}
                  <DateInput />
              
          </Form> */}

              <Button className="ButtonDesign"/>
          </>
        
  )
}

export default HeaderRxInput