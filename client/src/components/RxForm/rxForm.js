import React, { useState, useEffect, useContext, } from 'react'
import Wrapper from '../Wrapper/wrapper'
import { Form, Button, Row, Container, Col, Card } from 'react-bootstrap'
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
import CheckInput from '../TopInput/CheckInput'
import "./rxForm.css"





const RxForm = (props) => {

  let history = useHistory();
  const { currentUser, createToken } = useAuth()
  // createToken().then((Headers) => console.log(Headers))
  // console.log(currentUser.uid)
  
  const [personalInformation, setpersonalInformation] = useState({
    accountNumber: "",
    phoneNumber: "",
    doctorName: "",
    office: "",
    patientLastName: "",
    patientFirstName: "",
    dateSent: Date(),
    dateDue: Date(),
  });
  const [attachedItems, setAttachedItems] = useState({
    RxForm: false,
    Boxes: false,
    MailingLabel: false,
  });
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
  const [abutment, setAllAbutment] = useState({
    techRecommendation: false,
    titaniumCadCam: false,
    zirconiaCadCam: false,
    customUCLA: false,
    stock: false,
  });
  const [atlantisAbutment, setAtlantisAbutment] = useState({
    titanium: false,
    zirconia: false,
    goldHue: false,
  });
  const [screwRetainedCrown, setAllScrewRetainedCrown] = useState({
    semiNoble: false,
    zirconia: false,
    composite: false,
  });
  const [temps, setAllTemps] = useState({
    diagnosticWaxUp: false,
    wireCast: false,
    metalFrame: false,
    splinted: false,
    individual: false,
  });
  const [temps2, setAllTemps2] = useState({
    abutmentNums: "",
    ponticsNums: "",
  });
  const [ifNoOcclusalClearance, setAllNoOcclusal] = useState({
    metalOcclusion: false,
    reductionCoping: false,
    spotOpposing: false,
    makePermanentNote: false,
    callDoctor: false,
  });
  const [teeth, setAllTeeth] = useState({
    howMany: "",
  });
  const [bottomBoo, setAllBottomBoo] = useState({
    drToDieTrim: false,
    metalTryIn: false,
    bisqueBake: false,
    finishBox: false,
    nothingBox: false,
    lightBox: false,
    darkBox: false,
  });
  const [shade, setAllShade] = useState({
    shadeBox: "",
    stumpShade: "",
    drLicense: "",
    email: "",
  });

  const FormUpdate = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setpersonalInformation({
      ...personalInformation,
      [name]: value,
    });
  };
  const toggleItems = (e) => {
    const name = e.target.name;
    setAttachedItems({
      ...attachedItems,
      [name]: !attachedItems[name],
    });
  };
  const checkUpdate = (e) => {
    const name = e.target.name
    setAllPorcelain({
      ...allPorcelain,
      [name]: !allPorcelain[name]
    })
  }
  const checkUpdate2 = (e) => {
    const name = e.target.name
    setPfm({
      ...pfm,
      [name]: !pfm[name]
    })
  }
  const checkUpdate3 = (e) => {
    const name = e.target.name
    setMetalCollar({
      ...metalCollar,
      [name]: !metalCollar[name]
    })
  }
  const checkUpdate4 = (e) => {
    const name = e.target.name
    setAllGold({
      ...allGold,
      [name]: !allGold[name]
    })
  }
  const checkUpdate5 = (e) => {
    const name = e.target.name
    setAllAbutment({
      ...abutment,
      [name]: !abutment[name]
    })
  }
  const checkUpdate6 = (e) => {
    const name = e.target.name
    setAtlantisAbutment({
      ...atlantisAbutment,
      [name]: !atlantisAbutment[name]
    })
  }
  const checkUpdate7 = (e) => {
    const name = e.target.name
    setAllTemps({
      ...temps,
      [name]: !temps[name]
    })
  }
  const checkUpdate8 = (e) => {
    const {name, value} = e.target
    setAllTemps2({
      ...temps2,
      [name]: value
    })
  }
  const checkUpdate9 = (e) => {
    const name = e.target.name
    setAllNoOcclusal({
      ...ifNoOcclusalClearance,
      [name]: !ifNoOcclusalClearance[name]
    })
  }
  const checkUpdate10 = (e) => {
    const {name, value} = e.target
    setAllTeeth({
      ...teeth,
      [name]: value
    })
  }
  const checkUpdate11 = (e) => {
    const name = e.target.name
    setAllScrewRetainedCrown({
      ...screwRetainedCrown,
      [name]: !screwRetainedCrown[name]
    })
  }
  const checkUpdate12 = (e) => {
    const name = e.target.name
    setAllBottomBoo({
      ...bottomBoo,
      [name]: !bottomBoo[name]
    })
  }
  const checkUpdate13 = (e) => {
    const {name, value} = e.target
    setAllShade({
      ...shade,
      [name]: value
    })
  }

  const mappingObject = {
    accountNumber: "Account Number",
    phoneNumber: "Phone Number",
    doctorName: "Doctor Name",
    office: "Office",
    patientLastName: "Patient Last Name",
    patientFirstName: "Patient First Name",
    dateSent: "Date Sent",
    dateDue: "Date Due",
    Rxforms: "Rx Form",
    RxForm: "Rx Form",
    MailingLabel: "Mailing Label",
    Boxes: "Boxes",
    MailingLabels: "Mailing Labels",
    techRec: "TECH RECOMMENDATION",
    layeredEmax: "Layered Zirconia",
    monoEmax: "Mono Zirconia",
    LayeredZirconia: "Layered Zirconia",
    monoZirconia: "Mono Zirconia",
    composite: "Composite",
    nonprecious: "Non-precious",
    semiNoble: "Semi-noble",
    whiteNoble: "White-noble",
    highNoble: "High-noble",
    noCollar: "No Collar",
    porcButt: "Porc. Butt",
    lingual: "Lingual",
    halfLingual: "180° Lingual",
    fullCollar: "360° Collar",
    fullGoldTypeThree: "Full gold Type lll",
    inlayOnlayTypeTwo: "Inlay/onlay Type ll",
    fullWhiteNoble: "Full white noble",
    techRecommendation: "TECH RECOMMENDATION",
    titaniumCadCam: "Titanium cad/cam",
    zirconiaCadCam: "Zirconia cad/cam",
    customUCLA: "Custom UCLA",
    stock: "Stock",
    titanium: "Titanium",
    zirconia: "Zirconia",
    goldHue: "Gold Hue",
    semiNoble: "Semi-noble",
    diagnosticWaxUp: "Diagnostic wax-up",
    wireCast: "Wire Cast",
    metalFrame: "Metal Frame",
    splinted: "Splinted",
    individual: "Individual",
    abutmentNums: "Abutments #s",
    ponticsNums: "Pontics #s",
    metalOcclusion: "Metal Occlusion",
    reductionCoping: "Reduction coping",
    spotOpposing: "Spot opposing",
    makePermanentNote: "Make Permanent Note",
    callDoctor: "Call Doctor",
    drToDieTrim: "Dr. to die trim",
    metalTryIn: "Metal try-in",
    bisqueBake: "Bisque Bake",
    finishBox: "Finish",
    nothingBox: "Occlusion Staining - Nothing",
    lightBox: "Occlusion Staining - Light",
    darkBox: "Occlusion Staining - Dark",
    shadeBox: "Shade",
    stumpShade: "Stump Shade",
    drLicense: "Dr, License #",
    email: "Email",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "11",
    12: "12",
    13: "13",
    14: "14",
    15: "15",
    16: "16",
    17: "17",
    18: "18",
    19: "19",
    20: "20",
    21: "21",
    22: "22",
    23: "23",
    24: "24",
    25: "25",
    26: "26",
    27: "27",
    28: "28",
    29: "29",
    30: "30",
    31: "31",
    32: "32",
  }
  

  const save = (e) => {
    e.preventDefault()
    console.log(allPorcelain)
    createToken().then(headers => {
      console.log(headers)
      API.saveFormData({ allPorcelain, pfm, metalCollar, allGold, abutment, atlantisAbutment, temps, temps2, ifNoOcclusalClearance, teeth, screwRetainedCrown, personalInformation, attachedItems, bottomBoo, shade,  userId: currentUser.uid }, headers)
        .then(data => {
          console.log("Nick", data)
        })
        .catch(err => console.log(err))
      .then(history.push('/history'))
    })
  }

  return (
    <div className="bg-blue-300">

      <Container 
        className=" align-items-center justify-content-center "
        style={{ textAlign: "center" }}
      >
        <h1
          className="mb-4"
          style={{ fontSize: "75px", textDecoration: "underline", color: "black" }}
        >
          New RxForm
        </h1>
        <Row>
          <Col style={{ border: "solid", height: "125px", width: "100px", backgroundColor: "white"}}>
            <Form.Group controlId="Doctors Name">
              <Form.Label className="formHeader">Doctors Name</Form.Label>
              <Form.Control
                onChange={FormUpdate}
                value={personalInformation.doctorName}
                name="doctorName"
                label="Doctors Name"
                type="input"
                placeholder="Doctors Name"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
          <Col style={{ border: "solid", height: "125px", width: "100px", backgroundColor: "white" }}>
            <Form.Group controlId="Doctors Account Number">
              <Form.Label className="formHeader">
                Doctors Account Number
              </Form.Label>
              <Form.Control
                onChange={FormUpdate}
                value={personalInformation.accountNumber}
                name="accountNumber"
                label="Doctors Account Number"
                type="number"
                placeholder="Account Number"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col style={{ border: "solid", height: "125px", width: "100px", backgroundColor: "white" }}>
            <Form.Group controlId="phone Number">
              <Form.Label className="formHeader">Phone Number</Form.Label>
              <Form.Control
                onChange={FormUpdate}
                value={personalInformation.phoneNumber}
                name="phoneNumber"
                label="Phone Number"
                type="number"
                placeholder="Phone Number"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
          <Col style={{ border: "solid", height: "125px", width: "100px", backgroundColor: "white" }}>
            <Form.Group controlId="office">
              <Form.Label className="formHeader">Office</Form.Label>
              <Form.Control
                onChange={FormUpdate}
                value={personalInformation.office}
                name="office"
                label="office"
                type="input"
                placeholder="Office"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col style={{ border: "solid", height: "125px", width: "100px", backgroundColor: "white" }}>
            <Form.Group controlId="Doctors Name">
              <Form.Label className="formHeader">Patient Last Name</Form.Label>
              <Form.Control
                onChange={FormUpdate}
                value={personalInformation.patientLastName}
                name="patientLastName"
                label="Doctors Name"
                type="input"
                placeholder="Patient Last Name"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
          <Col style={{ border: "solid", height: "125px", width: "100px", backgroundColor: "white" }}>
            <Form.Group controlId="Patient FirstName">
              <Form.Label className="formHeader">Patient First Name</Form.Label>
              <Form.Control
                onChange={FormUpdate}
                value={personalInformation.patientFirstName}
                name="patientFirstName"
                label="Patient FirstName"
                type="input"
                placeholder="Patient First Name"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col style={{ border: "solid", height: "125px", width: "100px", backgroundColor: "white" }}>
            <Form.Group controlId="Date Due">
              <Form.Label className="formHeader">Due Date</Form.Label>
              <Form.Control
                onChange={FormUpdate}
                value={personalInformation.dateDue}
                name="dateDue"
                label="Date Due"
                type="date"
                placeholder="Date Due"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
          <Col style={{ border: "solid", height: "125px", width: "100px", backgroundColor: "white" }}>
            <Form.Group controlId="Date Sent">
              <Form.Label className="formHeader">Date Sent</Form.Label>
              <Form.Control
                onChange={FormUpdate}
                value={personalInformation.dateSent}
                name="dateSent"
                label="Date Sent"
                type="date"
                placeholder="Date Sent"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col style={{ border: "solid", height: "200px", width: "100px", backgroundColor: "white" }}>
            <Form.Group controlId="Date Sent">
              <Form.Label className="formHeader">Please Send:</Form.Label>
              <CheckInput
                toggleItems={toggleItems}
                attachedItems={attachedItems}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col style={{ border: "solid", height: "300px", width: "100px", backgroundColor: "white" }}>
            <Form.Label className="formHeader">All Porcelain:</Form.Label>
            {Object.entries(allPorcelain).map((pork) => {
              const [key, value] = pork;
              return (
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type={"checkbox"}
                    name={key}
                    label={mappingObject[key]}
                    onChange={checkUpdate}
                  />
                </Form.Group>
              );
            })}
          </Col>
          <Col style={{ border: "solid", height: "300px", width: "100px", backgroundColor: "white" }}>
            <Form.Label className="formHeader">PFM:</Form.Label>
            {Object.entries(pfm).map((mfp) => {
              const [key, value] = mfp;
              return (
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type={"checkbox"}
                    name={key}
                    label={mappingObject[key]}
                    onChange={checkUpdate2}
                  />
                </Form.Group>
              );
            })}
          </Col>
          <Col style={{ border: "solid", height: "300px", width: "100px", backgroundColor: "white" }}>
            <Form.Label className="formHeader">Metal Collar:</Form.Label>
            {Object.entries(metalCollar).map((metC) => {
              const [key, value] = metC;
              return (
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type={"checkbox"}
                    name={key}
                    label={mappingObject[key]}
                    onChange={checkUpdate3}
                  />
                </Form.Group>
              );
            })}
          </Col>
          <Col style={{ border: "solid", height: "300px", width: "100px", backgroundColor: "white" }}>
            <Form.Label className="formHeader">All Gold:</Form.Label>
            {Object.entries(allGold).map((gold) => {
              const [key, value] = gold;
              return (
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type={"checkbox"}
                    name={key}
                    label={mappingObject[key]}
                    onChange={checkUpdate4}
                  />
                </Form.Group>
              );
            })}
          </Col>
        </Row>
        <Row>
          <Col style={{ border: "solid", height: "450px", width: "100px", backgroundColor: "white" }}>
            <Form.Label className="formHeader">Abutment:</Form.Label>
            {Object.entries(abutment).map((abut) => {
              const [key, value] = abut;
              return (
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type={"checkbox"}
                    name={key}
                    label={mappingObject[key]}
                    onChange={checkUpdate5}
                  />
                </Form.Group>
              );
            })}
          </Col>
          <Col style={{ border: "solid", height: "450px", width: "100px", backgroundColor: "white" }}>
            <Form.Label className="formHeader">Atlantis Abutment:</Form.Label>
            {Object.entries(atlantisAbutment).map((atlantis) => {
              const [key, value] = atlantis;
              return (
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type={"checkbox"}
                    name={key}
                    label={mappingObject[key]}
                    onChange={checkUpdate6}
                  />
                </Form.Group>
              );
            })}
          </Col>
          <Col style={{ border: "solid", height: "450px", width: "100px", backgroundColor: "white" }}>
            <Form.Label className="formHeader">Screw Retained Crown:</Form.Label>
            {Object.entries(screwRetainedCrown).map((screw) => {
              const [key, value] = screw;
              return (
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type={"checkbox"}
                    name={key}
                    label={mappingObject[key]}
                    onChange={checkUpdate11}
                  />
                </Form.Group>
              );
            })}
          </Col>
          <Col style={{ border: "solid", height: "450px", width: "100px", backgroundColor: "white" }}>
            <Form.Label className="formHeader">Temps:</Form.Label>
            {Object.entries(temps).map((temp) => {
              const [key, value] = temp;
              return (
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type={"checkbox"}
                    name={key}
                    label={mappingObject[key]}
                    onChange={checkUpdate7}
                  />
                </Form.Group>
              );
            })}
            {Object.entries(temps2).map((temp2) => {
              const [key, value] = temp2;
              return (
                <Form.Group>
                  <Form.Label>{mappingObject[key]}</Form.Label>
                  <Form.Control
                    name={key}
                    as="input"
                    rows={1}
                    onChange={checkUpdate8}
                  />
                </Form.Group>
              );
            })}
          </Col>
        </Row>
        <Row>
          <Col style={{ border: "solid", height: "450px", width: "100px", backgroundColor: "white" }}>
            <Form.Label className="formHeader">
              If No Occlusal Clearance:
            </Form.Label>
            {Object.entries(ifNoOcclusalClearance).map((occlusal) => {
              const [key, value] = occlusal;
              return (
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type={"checkbox"}
                    name={key}
                    label={mappingObject[key]}
                    onChange={checkUpdate9}
                  />
                </Form.Group>
              );
            })}
          </Col>
          <Col style={{ border: "solid", height: "450px", width: "100px", backgroundColor: "white" }}>
            <Form.Label className="formHeader">Teeth:</Form.Label>
            <p className="mt-3">
              Please enter which teeth we will be working on, separate each number
              by a comma!
            </p>
            {Object.entries(teeth).map((tooth) => {
              const [key, value] = tooth;
              return (
                <Form.Group>
                  <Form.Label>{mappingObject[key]}</Form.Label>
                  <Form.Control
                    name={key}
                    as="input"
                    rows={1}
                    onChange={checkUpdate10}
                  />
                </Form.Group>
              );
            })}
          </Col>
          <Col style={{ border: "solid", height: "450px", width: "100px", backgroundColor: "white" }}>
            <Form.Label className="formHeader">Additional Questions:</Form.Label>
            {Object.entries(bottomBoo).map((oneBoo) => {
              const [key, value] = oneBoo;
              return (
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type={"checkbox"}
                    name={key}
                    label={mappingObject[key]}
                    onChange={checkUpdate12}
                  />
                </Form.Group>
              );
            })}
          </Col>
          <Col style={{ border: "solid", height: "450px", width: "100px", backgroundColor: "white" }}>
            <Form.Label className="formHeader">
              Additional Questions Continued:
            </Form.Label>
            {Object.entries(shade).map((shadeOne) => {
              const [key, value] = shadeOne;
              return (
                <Form.Group>
                  <Form.Label>{mappingObject[key]}</Form.Label>
                  <Form.Control
                    name={key}
                    as="input"
                    rows={1}
                    onChange={checkUpdate13}
                  />
                </Form.Group>
              );
            })}
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              className="mt-3 mb-3"
              variant="danger"
              type="submit"
              onClick={save}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
    // <Container  className="align-items-center justify-content-center mt-3">
    //   <div className="w-100" style={{ maxWidth: "100%" }}>

    //   <Form>
    //     <Row>
    //       <div className="col-md">
    //         <Form.Group controlId="Doctors Name">
    //           <Form.Label>Doctors Name</Form.Label>
    //           <Form.Control
    //             onChange={FormUpdate}
    //             value={personalInformation.doctorName}
    //             name="doctorName"
    //             label="Doctors Name"
    //             type="input"
    //             placeholder="Doctors Name"
    //           />
    //           <Form.Text className="text-muted"></Form.Text>
    //         </Form.Group>
    //       </div>
    //       <div className="col-xs-12 col-md-6">
    //         <Form.Group controlId="Doctors Account Number">
    //           <Form.Label>Doctors Account Number</Form.Label>
    //           <Form.Control
    //             onChange={FormUpdate}
    //             value={personalInformation.accountNumber}
    //             name="accountNumber"
    //             label="Doctors Account Number"
    //             type="number"
    //             placeholder="Account Number"
    //           />
    //           <Form.Text className="text-muted"></Form.Text>
    //         </Form.Group>
    //       </div>
    //       <div className="col-xs-12 col-md-6">
    //         <Form.Group controlId="phone Number">
    //           <Form.Label>Phone Number</Form.Label>
    //           <Form.Control
    //             onChange={FormUpdate}
    //             value={personalInformation.phoneNumber}
    //             name="phoneNumber"
    //             label="phone Number"
    //             type="number"
    //             placeholder="phone Number"
    //           />
    //           <Form.Text className="text-muted"></Form.Text>
    //         </Form.Group>
    //       </div>
    //       <div className="col-xs-12 col-md-6">
    //         <Form.Group controlId="office">
    //           <Form.Label>office</Form.Label>
    //           <Form.Control
    //             onChange={FormUpdate}
    //             value={personalInformation.office}
    //             name="office"
    //             label="office"
    //             type="input"
    //             placeholder="office"
    //           />
    //           <Form.Text className="text-muted"></Form.Text>
    //         </Form.Group>
    //       </div>
    //       <div className="col-xs-12 col-md-6">
    //         <Form.Group controlId="Doctors Name">
    //           <Form.Label>Patient Last Name</Form.Label>
    //           <Form.Control
    //             onChange={FormUpdate}
    //             value={personalInformation.patientLastName}
    //             name="patientLastName"
    //             label="Doctors Name"
    //             type="input"
    //             placeholder="patient LastName"
    //           />
    //           <Form.Text className="text-muted"></Form.Text>
    //         </Form.Group>
    //       </div>
    //       <div className="col-xs-12 col-md-6">
    //         <Form.Group controlId="Patient FirstName">
    //           <Form.Label>Patient First Name</Form.Label>
    //           <Form.Control
    //             onChange={FormUpdate}
    //             value={personalInformation.patientFirstName}
    //             name="patientFirstName"
    //             label="Patient FirstName"
    //             type="input"
    //             placeholder="patient FirstName"
    //           />
    //           <Form.Text className="text-muted"></Form.Text>
    //         </Form.Group>
    //       </div>
    //       <div className="col-xs-12 col-md-6">
    //         <Form.Group controlId="Date Due">
    //           <Form.Label>Due Date</Form.Label>
    //           <Form.Control
    //             onChange={FormUpdate}
    //             value={personalInformation.dateDue}
    //             name="dateDue"
    //             label="Date Due"
    //             type="date"
    //             placeholder="Date Due"
    //           />
    //           <Form.Text className="text-muted"></Form.Text>
    //         </Form.Group>
    //       </div>
    //       <div className="col-xs-12 col-md-6">
    //         <Form.Group controlId="Date Sent">
    //           <Form.Label>Date Sent</Form.Label>
    //           <Form.Control
    //             onChange={FormUpdate}
    //             value={personalInformation.dateSent}
    //             name="dateSent"
    //             label="Date Sent"
    //             type="date"
    //             placeholder="Date Sent"
    //           />
    //           <Form.Text className="text-muted"></Form.Text>
    //           {/* <pre>{JSON.stringify(attachedItems, null, 2)}</pre> */}
    //           <CheckInput
    //             toggleItems={toggleItems}
    //             attachedItems={attachedItems}
    //           />
    //         </Form.Group>
    //       </div>
    //     </Row>
    //   </Form>
    //   <Container>
    //     <Row>
    //       <Col sm>
    //         <div className=" ">
    //           <h2 style={{ textDecoration: "underline" }}>All Porcelain</h2>
    //           {Object.entries(allPorcelain).map((pork) => {
    //             const [key, value] = pork;
    //             return (
    //               <Form.Group controlId="formBasicCheckbox">
    //                 <Form.Check
    //                   type={"checkbox"}
    //                   name={key}
    //                   label={key}
    //                   onChange={checkUpdate}
    //                 />
    //               </Form.Group>
    //             );
    //           })}
    //         </div>
    //       </Col>
    //       <Col sm>
    //         <div>
    //           <h2 style={{ textDecoration: "underline" }}>PFM</h2>
    //           {/* <pre>{JSON.stringify(pfm, null, 2)}</pre> */}
    //           {Object.entries(pfm).map((mfp) => {
    //             const [key, value] = mfp;
    //             return (
    //               <Form.Group controlId="formBasicCheckbox">
    //                 <Form.Check
    //                   type={"checkbox"}
    //                   name={key}
    //                   label={key}
    //                   onChange={checkUpdate2}
    //                 />
    //               </Form.Group>
    //             );
    //           })}
    //         </div>
    //       </Col>
    //       <Col sm>
    //         <div>
    //           {" "}
    //           <h2 style={{ textDecoration: "underline" }}>Metal Collar</h2>
    //           {/* <pre>{JSON.stringify(metalCollar, null, 2)}</pre> */}
    //           {Object.entries(metalCollar).map((metC) => {
    //             const [key, value] = metC;
    //             return (
    //               <Form.Group controlId="formBasicCheckbox">
    //                 <Form.Check
    //                   type={"checkbox"}
    //                   name={key}
    //                   label={key}
    //                   onChange={checkUpdate3}
    //                 />
    //               </Form.Group>
    //             );
    //           })}
    //         </div>
    //       </Col>
    //     </Row>
    //   </Container>
    //   <Container>
    //     <Row>
    //       <Col sm>
    //         <div>
    //           {" "}
    //           <h2 style={{ textDecoration: "underline" }}>All Gold</h2>
    //           {/* <pre>{JSON.stringify(allGold, null, 2)}</pre> */}
    //           {Object.entries(allGold).map((gold) => {
    //             const [key, value] = gold;
    //             return (
    //               <Form.Group controlId="formBasicCheckbox">
    //                 <Form.Check
    //                   type={"checkbox"}
    //                   name={key}
    //                   label={key}
    //                   onChange={checkUpdate4}
    //                 />
    //               </Form.Group>
    //             );
    //           })}
    //         </div>
    //       </Col>
    //       <Col sm>
    //         <div>
    //           {" "}
    //           <h2 style={{ textDecoration: "underline" }}>Abutment</h2>
    //           {/* <pre>{JSON.stringify(abutment, null, 2)}</pre> */}
    //           {Object.entries(abutment).map((abut) => {
    //             const [key, value] = abut;
    //             return (
    //               <Form.Group controlId="formBasicCheckbox">
    //                 <Form.Check
    //                   type={"checkbox"}
    //                   name={key}
    //                   label={key}
    //                   onChange={checkUpdate5}
    //                 />
    //               </Form.Group>
    //             );
    //           })}
    //         </div>
    //       </Col>
    //       <Col sm>
    //         <div>
    //           {" "}
    //           <h2 style={{ textDecoration: "underline" }}>Atlantis Abutment</h2>
    //           {/* <pre>{JSON.stringify(atlantisAbutment, null, 2)}</pre> */}
    //           {Object.entries(atlantisAbutment).map((atlantis) => {
    //             const [key, value] = atlantis;
    //             return (
    //               <Form.Group controlId="formBasicCheckbox">
    //                 <Form.Check
    //                   type={"checkbox"}
    //                   name={key}
    //                   label={key}
    //                   onChange={checkUpdate6}
    //                 />
    //               </Form.Group>
    //             );
    //           })}
    //         </div>
    //       </Col>
    //     </Row>
    //   </Container>
    //   <Container>
    //     <Row>
    //       <Col sm>
    //         <div>
    //           {" "}
    //           <h2 style={{ textDecoration: "underline" }}>
    //             Screw Retained Crown
    //           </h2>
    //           {/* <pre>{JSON.stringify(screwRetainedCrown, null, 2)}</pre> */}
    //           {Object.entries(screwRetainedCrown).map((screw) => {
    //             const [key, value] = screw;
    //             return (
    //               <Form.Group controlId="formBasicCheckbox">
    //                 <Form.Check
    //                   type={"checkbox"}
    //                   name={key}
    //                   label={key}
    //                   onChange={checkUpdate11}
    //                 />
    //               </Form.Group>
    //             );
    //           })}
    //         </div>
    //       </Col>
    //       <Col sm>
    //         <div>
    //           {" "}
    //           <h2 style={{ textDecoration: "underline" }}>Temps</h2>
    //           {/* <pre>{JSON.stringify(temps, null, 2)}</pre> */}
    //           {Object.entries(temps).map((temp) => {
    //             const [key, value] = temp;
    //             return (
    //               <Form.Group controlId="formBasicCheckbox">
    //                 <Form.Check
    //                   type={"checkbox"}
    //                   name={key}
    //                   label={key}
    //                   onChange={checkUpdate7}
    //                 />
    //               </Form.Group>
    //             );
    //           })}
    //         </div>
    //       </Col>
    //       <Col sm>
    //         <div>
    //           {" "}
    //           <h2 style={{ textDecoration: "underline" }}>Temps Continued</h2>
    //           {/* <pre>{JSON.stringify(temps2, null, 2)}</pre> */}
    //           {Object.entries(temps2).map((temp2) => {
    //             const [key, value] = temp2;
    //             return (
    //               <Form.Group>
    //                 <Form.Label>{key}</Form.Label>
    //                 <Form.Control
    //                   name={key}
    //                   as="input"
    //                   rows={1}
    //                   onChange={checkUpdate8}
    //                 />
    //               </Form.Group>
    //             );
    //           })}
    //         </div>
    //       </Col>
    //     </Row>
    //   </Container>
    //   <Container>
    //     <Row>
    //       <Col sm>
    //         <div>
    //           {" "}
    //           <h2 style={{ textDecoration: "underline" }}>
    //             Screw Retained Crown
    //           </h2>
    //           {/* <pre>{JSON.stringify(screwRetainedCrown, null, 2)}</pre> */}
    //           {Object.entries(screwRetainedCrown).map((screw) => {
    //             const [key, value] = screw;
    //             return (
    //               <Form.Group controlId="formBasicCheckbox">
    //                 <Form.Check
    //                   type={"checkbox"}
    //                   name={key}
    //                   label={key}
    //                   onChange={checkUpdate11}
    //                 />
    //               </Form.Group>
    //             );
    //           })}
    //         </div>
    //       </Col>
    //       <Col sm>
    //         <div>
    //           {" "}
    //           <h2 style={{ textDecoration: "underline" }}>Temps</h2>
    //           {/* <pre>{JSON.stringify(temps, null, 2)}</pre> */}
    //           {Object.entries(temps).map((temp) => {
    //             const [key, value] = temp;
    //             return (
    //               <Form.Group controlId="formBasicCheckbox">
    //                 <Form.Check
    //                   type={"checkbox"}
    //                   name={key}
    //                   label={key}
    //                   onChange={checkUpdate7}
    //                 />
    //               </Form.Group>
    //             );
    //           })}
    //         </div>
    //       </Col>
    //       <Col sm>
    //         <div>
    //           {" "}
    //           <h2 style={{ textDecoration: "underline" }}>Temps Continued</h2>
    //           {/* <pre>{JSON.stringify(temps2, null, 2)}</pre> */}
    //           {Object.entries(temps2).map((temp2) => {
    //             const [key, value] = temp2;
    //             return (
    //               <Form.Group>
    //                 <Form.Label>{key}</Form.Label>
    //                 <Form.Control
    //                   name={key}
    //                   as="input"
    //                   rows={1}
    //                   onChange={checkUpdate8}
    //                 />
    //               </Form.Group>
    //             );
    //           })}
    //         </div>
    //       </Col>
    //     </Row>
    //   </Container>
    //   <Container>
    //     <Row>
    //       <Col sm>
    //         <div>
    //           <h2 style={{ textDecoration: "underline" }}>
    //             If No Occlusal Clearance
    //           </h2>
    //           {/* <pre>{JSON.stringify(ifNoOcclusalClearance, null, 2)}</pre> */}
    //           {Object.entries(ifNoOcclusalClearance).map((occlusal) => {
    //             const [key, value] = occlusal;
    //             return (
    //               <Form.Group controlId="formBasicCheckbox">
    //                 <Form.Check
    //                   type={"checkbox"}
    //                   name={key}
    //                   label={key}
    //                   onChange={checkUpdate9}
    //                 />
    //               </Form.Group>
    //             );
    //           })}
    //         </div>
    //       </Col>
    //       <Col sm>
    //         <div>
    //           {" "}
    //           <h2 style={{ textDecoration: "underline" }}>
    //             Additional Questions
    //           </h2>
    //           {/* <pre>{JSON.stringify(teeth, null, 2)}</pre> */}
    //           {Object.entries(bottomBoo).map((oneBoo) => {
    //             const [key, value] = oneBoo;
    //             return (
    //               <Form.Group controlId="formBasicCheckbox">
    //                 <Form.Check
    //                   type={"checkbox"}
    //                   name={key}
    //                   label={key}
    //                   onChange={checkUpdate12}
    //                 />
    //               </Form.Group>
    //             );
    //           })}
    //         </div>
    //       </Col>
    //       <Col sm>
    //         <div>
    //           {" "}
    //           <h2 style={{ textDecoration: "underline" }}>
    //             Additional Questions Continued
    //           </h2>
    //           {/* <pre>{JSON.stringify(temps2, null, 2)}</pre> */}
    //           {Object.entries(shade).map((shadeOne) => {
    //             const [key, value] = shadeOne;
    //             return (
    //               <Form.Group>
    //                 <Form.Label>{key}</Form.Label>
    //                 <Form.Control
    //                   name={key}
    //                   as="input"
    //                   rows={1}
    //                   onChange={checkUpdate13}
    //                 />
    //               </Form.Group>
    //             );
    //           })}
    //         </div>
    //       </Col>
    //     </Row>
    //   </Container>
    //   <div>
    //     {" "}
    //     <h2 style={{ textDecoration: "underline" }}>Teeth</h2>
    //     <Form.Group className="col-4 " controlId="formBasicCheckbox">
    //       <Form.Control
    //         as="input"
    //         placeholder="Enter which teeth are being worked on"
    //         // name={key}
    //         // label={key}
    //         onChange={checkUpdate10}
    //       />
    //     </Form.Group>
    //     {/* <pre>{JSON.stringify(teeth, null, 2)}</pre> */}
    //     {/* {Object.entries(teeth).map((tooth) => {
    //         const [key, value] = tooth;
    //         return (
    //         );
    //       })} */}
    //   </div>

    //   <div className=" ">
    //     <Button variant="primary" type="submit" onClick={save}>
    //       Submit
    //     </Button>
    //     <br />
    //     <br />
    //     <Button>
    //       <Link to="/" style={{ color: "white" }}>
    //         Home
    //       </Link>
    //     </Button>
    //   </div>
    //   </div>
    // </Container>
  );
}
export default RxForm