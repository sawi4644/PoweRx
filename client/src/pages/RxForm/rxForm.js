import React, {useState, useEffect, useContext,} from 'react'
import Wrapper from '../../components/Wrapper/wrapper'
import Row from '../../components/Row/row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import sampleData from './sampleData'
import API from '../../utils/API'
import {FormContext} from '../../context/AuthContext'
import {
  Link,
  useLocation,
  useHistory 
} from "react-router-dom";



const RxForm = () => {

  let history = useHistory();

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
    e.preventDefault()
    console.log(allPorcelain)
    API.saveFormData({allPorcelain})
    .then(data => {
      console.log(data)
    })
    .catch(err => console.log(err))
    .then(history.push('/homepage'))
  }


  return (
    <Wrapper>
      <pre>{JSON.stringify(allPorcelain, null, 2)}</pre>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          name="techRec"
          label="Tech Recommendation"
          onChange={checkUpdate}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          name="layeredEmax"
          label="Layered EMAX"
          onChange={checkUpdate}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" name="monoEmax" label="Mono Emax" onChange={checkUpdate} />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          name="LayeredZirconia"
          label="Layered Zirconia"
          onChange={checkUpdate}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          name="monoZirconia"
          label="Mono Zirconia"
          onChange={checkUpdate}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" name="composite" label="Composite" onChange={checkUpdate} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={save}>
        Submit
      </Button>
      <br/>
      <br/>
      <Button><Link to="/homepage" style={{color: "white"}} >Home</Link></Button>
    </Wrapper>
  );

}

export default RxForm