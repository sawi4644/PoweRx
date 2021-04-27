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
import CheckInput from '../TopInput/CheckInput'





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
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
    21: false,
    22: false,
    23: false,
    24: false,
    25: false,
    26: false,
    27: false,
    28: false,
    29: false,
    30: false,
    31: false,
    32: false,
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
    const name = e.target.name
    setAllTeeth({
      ...teeth,
      [name]: !teeth[name]
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
    nothingBox: "Nothing",
    lightBox: "Light",
    darkBox: "Dark",
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
      // .then(history.push('/'))
    })
  }

  return (
    <div>
      <div className="card mt-4" style={{ width: "18rem;" }}>
        <div className="card-body">
          <div>
            {" "}
            <h2 style={{ textDecoration: "underline" }}>
              Personal Information
            </h2>
            {/* <pre>{JSON.stringify(personalInformation, null, 2)}</pre> */}
            <Form>
              <Form.Group controlId="Doctors Name">
                <Form.Label>Doctors Name</Form.Label>
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
              <Form.Group controlId="Doctors Account Number">
                <Form.Label>Doctors Account Number</Form.Label>
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
              <Form.Group controlId="phone Number">
                <Form.Label>Phone Number</Form.Label>
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
              <Form.Group controlId="office">
                <Form.Label>Office</Form.Label>
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
              <Form.Group controlId="Doctors Name">
                <Form.Label>Patient Last Name</Form.Label>
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
              <Form.Group controlId="Patient FirstName">
                <Form.Label>Patient First Name</Form.Label>
                <Form.Control
                  onChange={FormUpdate}
                  value={personalInformation.patientFirstName}
                  name="patientFirstName"
                  label="Patient First Name"
                  type="input"
                  placeholder="Patient First Name"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="Date Due">
                <Form.Label>Due Date</Form.Label>
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
              <Form.Group controlId="Date Sent">
                <Form.Label>Date Sent</Form.Label>
                <Form.Control
                  onChange={FormUpdate}
                  value={personalInformation.dateSent}
                  name="dateSent"
                  label="Date Sent"
                  type="date"
                  placeholder="Date Sent"
                />
              </Form.Group>
              <div>
                {/* <pre>{JSON.stringify(allPorcelain, null, 2)}</pre> */}
                {Object.entries(attachedItems).map((attitem) => {
                  const [key, value] = attitem;
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
              </div>
            </Form>
          </div>
        </div>
      </div>
      <div>
        <h2 style={{ textDecoration: "underline" }}>All Porcelain</h2>
        {/* <pre>{JSON.stringify(allPorcelain, null, 2)}</pre> */}
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
      </div>
      <div>
        <h2 style={{ textDecoration: "underline" }}>PFM</h2>
        {/* <pre>{JSON.stringify(pfm, null, 2)}</pre> */}
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
      </div>
      <div>
        {" "}
        <h2 style={{ textDecoration: "underline" }}>Metal Collar</h2>
        {/* <pre>{JSON.stringify(metalCollar, null, 2)}</pre> */}
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
      </div>
      <div>
        {" "}
        <h2 style={{ textDecoration: "underline" }}>All Gold</h2>
        {/* <pre>{JSON.stringify(allGold, null, 2)}</pre> */}
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
      </div>
      <div>
        {" "}
        <h2 style={{ textDecoration: "underline" }}>Abutment</h2>
        {/* <pre>{JSON.stringify(abutment, null, 2)}</pre> */}
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
      </div>
      <div>
        {" "}
        <h2 style={{ textDecoration: "underline" }}>Atlantis Abutment</h2>
        {/* <pre>{JSON.stringify(atlantisAbutment, null, 2)}</pre> */}
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
      </div>
      <div>
        {" "}
        <h2 style={{ textDecoration: "underline" }}>Screw Retained Crown</h2>
        {/* <pre>{JSON.stringify(screwRetainedCrown, null, 2)}</pre> */}
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
      </div>
      <div>
        {" "}
        <h2 style={{ textDecoration: "underline" }}>Temps</h2>
        {/* <pre>{JSON.stringify(temps, null, 2)}</pre> */}
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
      </div>
      <div>
        {" "}
        <h2 style={{ textDecoration: "underline" }}>Temps Continued</h2>
        {/* <pre>{JSON.stringify(temps2, null, 2)}</pre> */}
        {Object.entries(temps2).map((temp2) => {
          const [key, value] = temp2;
          return (
            <Form.Group>
              <Form.Label>{mappingObject[key]}</Form.Label>
              <Form.Control
                name={mappingObject[key]}
                as="input"
                rows={1}
                onChange={checkUpdate8}
              />
            </Form.Group>
          );
        })}
      </div>
      <div>
        <h2 style={{ textDecoration: "underline" }}>
          If No Occlusal Clearance
        </h2>
        {/* <pre>{JSON.stringify(ifNoOcclusalClearance, null, 2)}</pre> */}
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
      </div>
      <div>
        {" "}
        <h2 style={{ textDecoration: "underline" }}>Teeth</h2>
        {/* <pre>{JSON.stringify(teeth, null, 2)}</pre> */}
        {Object.entries(teeth).map((tooth) => {
          const [key, value] = tooth;
          return (
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type={"checkbox"}
                name={key}
                label={mappingObject[key]}
                onChange={checkUpdate10}
              />
            </Form.Group>
          );
        })}
      </div>
      <div>
        {" "}
        <h2 style={{ textDecoration: "underline" }}>Additional Questions</h2>
        {/* <pre>{JSON.stringify(teeth, null, 2)}</pre> */}
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
      </div>
      <div>
        {/* <pre>{JSON.stringify(temps2, null, 2)}</pre> */}
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
      </div>
      <Button variant="primary" type="submit" onClick={save}>
        Submit
      </Button>
      <br />
      <br />
      <Button>
        <Link to="/" style={{ color: "white" }}>
          Home
        </Link>
      </Button>
    </div>
  );
}
export default RxForm