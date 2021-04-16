import React, {useState, useEffect, useContext} from 'react'
import Wrapper from '../../components/Wrapper/wrapper'
import Row from '../../components/Row/row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import sampleData from './sampleData'
import API from '../../utils/API'
import {FormContext} from '../../context/formContext'


const RxForm = () => {

  const [allPorcelain, setAllPorcelain] = useState({
      techRec: false,
      layeredEmax: false,
      monoEmax: false,
      LayeredZirconia: false,
      monoZirconia: false,
      composite: false,
  });



  // const { form, setForm} = useContext(FormContext)
  
  // label: {
  //   name: '',
  //   value: false,
  //   inputType: ''
  // }
  const checkUpdate = (e) => {
    const name = e.target.name
    setAllPorcelain({
      ...allPorcelain,
      [name]: !allPorcelain[name]
    })
    // console.log("This is the form", allPorcelain)
  }

  const save = (e) => {
    console.log(allPorcelain)
    e.preventDefault()
    API.saveFormData(allPorcelain)
    .then(data => {
      console.log(data)
    })
    .catch(err => console.log(err))
  }


  return (
    <Wrapper>
      <pre>
        {JSON.stringify(allPorcelain, null, 2)}
      </pre>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox"  name="techRec" label="Tech Recommendation" onChange={checkUpdate}/>
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Layered EMAX" onChange={checkUpdate}/>
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Mono Emax" onChange={checkUpdate}/>
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Layered Zirconia" onChange={checkUpdate}/>
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Mono Zirconia" onChange={checkUpdate}/>
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Composite" onChange={checkUpdate}/>
      </Form.Group>
    </Wrapper>
  );

}

export default RxForm