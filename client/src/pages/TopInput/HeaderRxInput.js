import React from 'react'
import Wrapper from '../../components/Wrapper/wrapper'
import InputForm from './InputForm'
import CardData from './CardData'
import Form from 'react-bootstrap/Form'
import Button from './Button'
import DateInput from './DateInput'
import './Header.css' 
import CheckInput from './CheckInput'
// import Col from 'react-bootstrap/Col'

const HeaderRxInput = () => {

  // const [HeaderInput, setHeaderInput] = useState([])

  // useEffect(() => {
  //   API.GetHeaderInput()
  //     .then(response => setHeaderInput(response.data))
  //     .catch(err => console.log(err))
  // }, [])


  return (
    <Wrapper>
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </Wrapper>

  )
}









          // <>
          // <Form className="FormDesign">
          //     {Object.entries(CardData).map((sampleData) => {
          //       const [
          //         key,
          //         obj,
          //       ] = sampleData
          //       return (
          //         <InputForm 
          //         key={key}
          //         placeholder={obj.FieldLabel}
          //         FieldLabel={obj.FieldLabel}
          //         value={obj.value}
          //           />
          //           )})}
          //         <DateInput />
          //         <DateInput />
          //         <CheckInput />
          // </Form >


          // {/* <Form className="FormDesign">
          //     {Object.entries(sample2).map((sampleD) => {
          //       const [
          //         key,
          //         obj,
          //       ] = sampleD
          //       return (
          //         <InputForm 
          //         key={key}
          //         placeholder={obj.FieldLabel}
          //         FieldLabel={obj.FieldLabel}
          //           />
          //           )})}
          //         <DateInput />
              
          // </Form> */}

          //     <Button className="ButtonDesign"/>
          // </>
        
  


export default HeaderRxInput