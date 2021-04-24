import React, { useState, useEffect, useContext, } from 'react'
import Wrapper from '../Wrapper/wrapper'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import API from '../../utils/API'
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
  });

  const [screwRetainedCrown, setAllScrewRetainedCrown] = useState({
    semiNoble: false,
    zirconia: false,
    composite: false,
  });

  const checkUpdate11 = (e) => {
    const name = e.target.name
    setAllScrewRetainedCrown({
      ...screwRetainedCrown,
      [name]: !screwRetainedCrown[name]
    })
  }

  const checkUpdate10 = (e) => {
    const name = e.target.name
    setAllTeeth({
      ...teeth,
      [name]: !teeth[name]
    })
  }

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

  const save = (e) => {
    e.preventDefault()
    console.log(allPorcelain)
    createToken().then(headers => {
      console.log(headers)
      API.saveFormData({ allPorcelain, pfm, metalCollar, allGold, abutment, atlantisAbutment, temps, temps2, ifNoOcclusalClearance, teeth, screwRetainedCrown, personalInformation, attachedItems,  userId: currentUser.uid }, headers)
        .then(data => {
          console.log("Nick", data)
        })
        .catch(err => console.log(err))
      .then(history.push('/history'))
    })
  }

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
  const toggleItems = (e) => {
    const name = e.target.name;
    setAttachedItems({
      ...attachedItems,
      [name]: !attachedItems[name],
    });
  };
  const FormUpdate = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setpersonalInformation({
      ...personalInformation,
      [name]: value,
    });
  };


  return (
    <Wrapper className="flex flex-wrap">
      <div className="grid grid-cols gap-2">
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
              label="phone Number"
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
              placeholder="Last Name"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="Patient FirstName">
            <Form.Label>Patient First Name</Form.Label>
            <Form.Control
              onChange={FormUpdate}
              value={personalInformation.patientFirstName}
              name="patientFirstName"
              label="Patient FirstName"
              type="input"
              placeholder="First Name"
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
            <Form.Text className="text-muted"></Form.Text>
            <pre><strong>Please Send: </strong></pre>
            <CheckInput
              toggleItems={toggleItems}
              attachedItems={attachedItems}
            />
          </Form.Group>
        </Form>
      </div>
      <div>
        <pre><strong>ALL PORCELAIN</strong></pre>
        {Object.entries(allPorcelain).map((pork) => {
          const [key, value] = pork;
          return (
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type={"checkbox"}
                name={key}
                label={key}
                onChange={checkUpdate}
              />
            </Form.Group>
          );
        })}
      </div>
      <div>
        <pre><strong>PFM</strong></pre>
        {Object.entries(pfm).map((mfp) => {
          const [key, value] = mfp;
          return (
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type={"checkbox"}
                name={key}
                label={key}
                onChange={checkUpdate2}
              />
            </Form.Group>
          );
        })}
      </div>
      <div>
        <pre><strong>METAL COLLAR</strong></pre>
        {Object.entries(metalCollar).map((metC) => {
          const [key, value] = metC;
          return (
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type={"checkbox"}
                name={key}
                label={key}
                onChange={checkUpdate3}
              />
            </Form.Group>
          );
        })}
      </div>
      <div>
        <pre><strong>ALL GOLD</strong></pre>
        {Object.entries(allGold).map((gold) => {
          const [key, value] = gold;
          return (
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type={"checkbox"}
                name={key}
                label={key}
                onChange={checkUpdate4}
              />
            </Form.Group>
          );
        })}
      </div>
      <div>
        <pre><strong>ABUTMENT</strong></pre>
        {Object.entries(abutment).map((abut) => {
          const [key, value] = abut;
          return (
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type={"checkbox"}
                name={key}
                label={key}
                onChange={checkUpdate5}
              />
            </Form.Group>
          );
        })}
      </div>
      <div>
        <pre><strong>ATLANTIS ABUTMENT</strong></pre>
        {Object.entries(atlantisAbutment).map((atlantis) => {
          const [key, value] = atlantis;
          return (
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type={"checkbox"}
                name={key}
                label={key}
                onChange={checkUpdate6}
              />
            </Form.Group>
          );
        })}
      </div>
      <div>
        <pre><strong>SCREW RETAINED CROWN</strong></pre>
        {Object.entries(screwRetainedCrown).map((screw) => {
          const [key, value] = screw;
          return (
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type={"checkbox"}
                name={key}
                label={key}
                onChange={checkUpdate11}
              />
            </Form.Group>
          );
        })}
      </div>
      <div>
        <pre><strong> TEMPS</strong></pre>
        {Object.entries(temps).map((temp) => {
          const [key, value] = temp;
          return (
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type={"checkbox"}
                name={key}
                label={key}
                onChange={checkUpdate7}
              />
            </Form.Group>
          );
        })}
      </div>
      <div>
        {Object.entries(temps2).map((temp2) => {
          const [key, value] = temp2;
          return (
            <Form.Group>
              <Form.Label>{key}</Form.Label>
              <Form.Control
                name={key}
                as="textarea"
                rows={1}
                onChange={checkUpdate8}
              />
            </Form.Group>
          );
        })}
      </div>
      <div>
        <pre><strong>IF NO OCCLUSAL CLEARANCE</strong></pre>
        {Object.entries(ifNoOcclusalClearance).map((occlusal) => {
          const [key, value] = occlusal;
          return (
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type={"checkbox"}
                name={key}
                label={key}
                onChange={checkUpdate9}
              />
            </Form.Group>
          );
        })}
      </div>
      <div>
        <pre><strong>TEETH</strong></pre>
        {Object.entries(teeth).map((tooth) => {
          const [key, value] = tooth;
          return (
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type={"checkbox"}
                name={key}
                label={key}
                onChange={checkUpdate10}
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
    </Wrapper>
  );
}
export default RxForm