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
import { useAuth } from '../../contexts/AuthContext'
const HeaderRxInput = (props) => {
  const { currentUser, createToken } = useAuth()
  const [personalInformation, setpersonalInformation] = useState({
      accountNumber: "",
      phoneNumber: "",
      doctorName: "",
      office: "",
      patientLastName: "",
      patientFirstName: "",
      dateSent: Date(),
      dateDue: Date(),
  })
  const [attachedItems, setAttachedItems] = useState({
    RxForm: false,
    Boxes: false,
    MailingLabel: false,
  });
  const toggleItems = (e) => {
    const name = e.target.name
    setAttachedItems({
      ...attachedItems,
      [name]: !attachedItems[name]
    })}
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
    createToken().then(headers => {
      API.saveFormData({ personalInformation, attachedItems }, headers)
        .then(data => {
          console.log(data)
        })
        .catch(err => console.log(err))
    })
  }
  return (
    <Wrapper>
      <pre>
        {JSON.stringify(personalInformation, null, 2)}
      </pre>
      <Form >
        <Form.Group controlId="Doctors Name">
          <Form.Label>Doctors Name</Form.Label>
          <Form.Control onChange={FormUpdate} value={personalInformation.doctorName} name="doctorName" label="Doctors Name" type="input" placeholder="Doctors Name" />
          <Form.Text className="text-muted">
    </Form.Text>
        </Form.Group>
        <Form.Group controlId="Doctors Account Number">
          <Form.Label>Doctors Account Number</Form.Label>
          <Form.Control onChange={FormUpdate} value={personalInformation.accountNumber}name="accountNumber" label="Doctors Account Number" type="number" placeholder="Account Number" />
        </Form.Group>
      <Form.Group controlId="phone Number">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control onChange={FormUpdate} value={personalInformation.phoneNumber} name="phoneNumber" label="phone Number" type="number" placeholder="phone Number" />
          <Form.Text className="text-muted">
    </Form.Text>
        </Form.Group>
        <Form.Group controlId="office">
          <Form.Label>office</Form.Label>
          <Form.Control onChange={FormUpdate} value={personalInformation.office} name="office" label="office" type="input" placeholder="office" />
          <Form.Text className="text-muted">
    </Form.Text>
        </Form.Group>
        <Form.Group controlId="Doctors Name">
          <Form.Label>Doctors Name</Form.Label>
          <Form.Control onChange={FormUpdate} value={personalInformation.patientLastName} name="patientLastName" label="Doctors Name" type="input" placeholder="patient LastName" />
          <Form.Text className="text-muted">
    </Form.Text>
        </Form.Group>
        <Form.Group controlId="Patient FirstName">
          <Form.Label>Doctors Name</Form.Label>
          <Form.Control onChange={FormUpdate} value={personalInformation.patientFirstNme} name="patientFirstName" label="Patient FirstName" type="input" placeholder="patient FirstName" />
          <Form.Text className="text-muted">
    </Form.Text>
        </Form.Group>
        <Form.Group controlId="Date Due">
          <Form.Label>Date Due</Form.Label>
          <Form.Control onChange={FormUpdate} value={personalInformation.dateDue} name="dateDue" label="Date Due" type="date" placeholder="Date Due" />
          <Form.Text className="text-muted">
    </Form.Text>
        </Form.Group>
        <Form.Group controlId="Date Sent">
          <Form.Label>Date Sent</Form.Label>
          <Form.Control onChange={FormUpdate} value={personalInformation.dateSent} name="dateSent" label="Patient FirstName" type="date" placeholder="patient FirstName" />
          <Form.Text className="text-muted">
    </Form.Text>
    <pre>
        {JSON.stringify(attachedItems, null, 2)}
      </pre>
      <CheckInput
        toggleItems={toggleItems}
        attachedItems={attachedItems}
      />
        </Form.Group>
        <Button  onClick={save} variant="primary">Submit</Button>
      </Form>
    </Wrapper>
  )
}