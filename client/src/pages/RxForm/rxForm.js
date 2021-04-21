import React, {useState, useEffect, useContext,} from 'react'
import Wrapper from '../../components/Wrapper/wrapper'
import Row from '../../components/Row/row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import sampleData from './sampleData'
import API from '../../utils/API'
import {FormContext} from '../../contexts/AuthContext'
import {
  Link,
  useLocation,
  useHistory 
} from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext'




const RxForm = () => {

  let history = useHistory();
  const { currentUser, createToken } = useAuth()

  // createToken().then((Headers) => console.log(Headers))

  // console.log(currentUser.uid)
  

  const [allPorcelain, setAllPorcelain] = useState({
      techRec: false,
      layeredEmax: false,
      monoEmax: false,
      LayeredZirconia: false,
      monoZirconia: false,
      composite: false,
  });


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
    createToken().then(headers => {
      console.log(headers)
      API.saveFormData({allPorcelain, userId: currentUser.uid}, headers)
      .then(data => {
      console.log("Nick", data)
    })
    .catch(err => console.log(err))
    // .then(history.push('/'))
    })
    
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
      <Button><Link to="/" style={{color: "white"}} >Home</Link></Button>
    </Wrapper>
  );

}

export default RxForm