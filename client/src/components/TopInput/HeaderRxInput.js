import React, { useState } from 'react'
import Wrapper from '../../components/Wrapper/wrapper'
import InputForm from './InputForm'
import CardData from './CardData'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import API from '../../utils/API'
// import Button from './Button'
import DateInput from './DateInput'
import './Header.css' 
import CheckInput from './CheckInput'
// import Col from 'react-bootstrap/Col'
import {
  Link,
  useLocation
} from "react-router-dom";

const HeaderRxInput = () => {

  const [personalInformation, setpersonalInformation] = useState({
      accountNumber: "",
      phoneNumber: "",
      doctorName: "",
      office: "",
      patientLastName: "",
      patientFirstNme: "",
      dateSent: Date(),
      dateDue: Date(),
  })


  const FormUpdate = e => {
    const {name, value} = e.target
    console.log(name)
    setpersonalInformation({
      ...personalInformation,
      [name]: value,
  })
}

  const save = e => {
    e.preventDefault()
    console.log(personalInformation)
    API.saveFormData({personalInformation})
    .then(data => {
      console.log(data)
    })
    .catch(err => console.log(err))
  }
 


  return (
    <Wrapper>
      <pre>
        {JSON.stringify(personalInformation, null, 2)}
      </pre>
      <Form>
        <Form.Group controlId="Doctors Name">
          <Form.Label>Doctors Name</Form.Label>
          <Form.Control onChange={FormUpdate} value={personalInformation.doctorName} name="doctorName" label="Doctors Name" type="input" placeholder="Doctors Name" />
          <Form.Text className="text-muted">
    </Form.Text>
        </Form.Group>

        <Form.Group controlId="Doctors Account Number">
          <Form.Label>Doctors Account Number</Form.Label>
          <Form.Control onChange={FormUpdate} name="accountNumber" label="Doctors Account Number" type="number" placeholder="Account Number" />
        </Form.Group>
      <Button  onClick={save} variant="primary">Submit</Button>
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