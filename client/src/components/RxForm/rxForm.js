import React, { useState, useEffect, useContext, } from 'react'
import Wrapper from '../Wrapper/wrapper'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import sampleData from './sampleData'
import API from '../../utils/API'
import Checkbox from '../Checkbox/Checkbox'
import { FormContext } from '../../contexts/AuthContext'
import {
  Link,
  useLocation,
  useHistory
} from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext'




const RxForm = ({ defaultPorcelain }) => {

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

  const [pfm, setPfm] = useState({
    nonprecious: false,
    semiNoble: false,
    whiteNoble: false,
    highNoble: false,
  });

  const [metalCollar, setMetalCollar] = useState({
    noCollar: false,
    porcButt: false,
    lingual: false,
    halfLingual: false,
    fullCollar: false,
  });

  const [allGold, setAllGold] = useState({
    fullGoldTypeThree: false,
    inlayOnlayTypeTwo: false,
    fullWhiteNoble: false,
    
  });

  const [abutment, setAbutment] = useState({
    techRecommendation: false,
    titaniumCadCam: false,
    zirconiaCadCam: false,
    customUCLA: false,
    stock: false,
  });

  const [atlantisAbutment, setAtlantisAbutment] = useState({
    techRecommendation: false,
    titaniumCadCam: false,
    zirconiaCadCam: false,
    customUCLA: false,
    stock: false,
  });

  const [temps, setTemps] = useState({
    diagnosticWaxUp: false,
    abutmentNums: false,
    ponticsNums: false,
    wireCast: false,
    metalFrame: false,
    splinted: false,
    individual: false,
  });

  const [ifNoOcclusalClearance, setIfNoOcclusalClearance] = useState({
    metalOcclusion: false,
    reductionCoping: false,
    spotOpposing: false,
    makePermanentNote: false,
    callDoctor: false,
    
  });



  const checkUpdate = (e) => {
    const name = e.target.name
    setAllPorcelain({
      ...allPorcelain,
      [name]: !allPorcelain[name]
    })
    setPfm({
      ...pfm,
      [name]: !pfm[name]
    })
    setMetalCollar({
      ...metalCollar,
      [name]: !metalCollar[name]
    })
  }



  const save = (e) => {
    e.preventDefault()
    console.log(allPorcelain)
    createToken().then(headers => {
      console.log(headers)
      API.saveFormData({ allPorcelain, pfm, metalCollar, allGold, abutment, atlantisAbutment, temps, ifNoOcclusalClearance, userId: currentUser.uid }, headers)
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
      {Object.entries(allPorcelain).map(pork => {
        const [
          key,
          value
        ] = pork
        return (
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type={"checkbox"}
              name={key}
              label={key}
              onChange={checkUpdate}
            />
          </Form.Group>
        )
      })}
      {/* <Checkbox onChange={checkUpdate}/> */}


      {/* <Form.Group controlId="formBasicCheckbox">
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
      </Form.Group> */}
      <Button variant="primary" type="submit" onClick={save}>
        Submit
      </Button>
      <br />
      <br />
      <Button><Link to="/" style={{ color: "white" }} >Home</Link></Button>
    </Wrapper>
  );

}

export default RxForm