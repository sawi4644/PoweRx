import React, {useState} from 'react'
import { Card, Modal, Button } from 'react-bootstrap'

//code to allow
export default function MyCard(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  



  const objectsToMap = {
    // "Bob": props.bob,
    "Personal Info": props.personalInformation,
    "Attached Items": props.attachedItems,
    "All Porcelain": props.allPorcelain,
    "PFM": props.pfm,
    "Metal Collar": props.metalCollar,
    "All Gold": props.allGold,
    "Abutment": props.abutment,
    "Atlantis Abutment": props.atlantisAbutment,
    "Screw Retained Crown": props.screwRetainedCrown,
    "Temps": props.temps,
    "Temps Continued": props.temps2,
    "If No Occlusal": props.ifNoOcclusalClearance,
    "Teeth": props.teeth,
    "Additional Questions": props.bottomBoo,
    "Additonal Questions Continued": props.shade
    // "Teeth Shade": props.shade,
    // "Extra Choices": props.bottomBoo,
    // "Occlution Staining": props.occlutionStaining

  }
  console.log(objectsToMap)

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


  return (



    <Card className="m-5" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.personalInformation.patientLastName + ", " + props.personalInformation.patientFirstName}</Card.Title>
        <Card.Text>
          <div>Office: {props.personalInformation.office}</div>
          <div>Doctor Name: {props.personalInformation.doctorName}</div>
          <div>Due Date: {props.personalInformation.dateDue}</div>
          <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{props.personalInformation.patientLastName + ", " + props.personalInformation.patientFirstName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {Object.entries(objectsToMap).map(section => {
          const [
            subtitles,
            selections,
          ] = section


          return (
            <>
              <Card.Subtitle className="mb-2" style={{textDecoration: "underline"}}>
                {subtitles}
              </Card.Subtitle>
              {Object.entries(selections).map((porc) => {
                const [key, value] = porc;
                console.log(typeof(value))
                return (
                  <p>
                    <>{mappingObject[key]}:</> {
                    typeof(value) === "boolean" 
                      ? value === true ? "✓" : "" 
                      : value}
                  </p>
                );
              })}
            </>
          );
        })}
            </Modal.Body>
          </Modal>

          
        </Card.Text>
      </Card.Body>
    </Card>
  );
}