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
    howMany: "Selected Teeth",
  }




  return (
<Card className="m-5 px-6 group border-indigo-500 hover:bg-blue hover:shadow-lg hover:border-transparent  " style={{ width: "18rem" }}>
    <Card.Body>
      <Card.Title className="text-black-500 group-hover:text-indigo-600 ">{props.personalInformation.patientFirstName + ", " + props.personalInformation.patientLastName}</Card.Title>
        <Card.Text>
          <div>Office: {props.personalInformation.office}</div>
          <div>Doctor Name: {props.personalInformation.doctorName}</div>
          <Button className="px-3 bg-blue-500 hover:bg-blue-300 mt-2" onClick={handleShow}>
            View Full Form
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Patient Form</Modal.Title>
            </Modal.Header>
            <Modal.Body >
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