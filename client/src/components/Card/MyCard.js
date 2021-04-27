import React, {useState} from 'react'
import { Card, Modal, Button } from 'react-bootstrap'


export default function MyCard(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  



  const objectsToMap = {
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
    "Teeth": props.teeth

  }
  console.log(props)


  return (
    <Card className="m-5 px-6 group border-indigo-500 hover:bg-blue hover:shadow-lg hover:border-transparent" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title className="text-indigo-300 group-hover:text-indigo-600 ">{props.personalInformation.patientFirstName + ", " + props.personalInformation.patientLastName}</Card.Title>
        <Card.Text>
          <div>Office: {props.personalInformation.office}</div>
          <div>Doctor Name: {props.personalInformation.doctorName}</div>
          <div>Due Date: {props.personalInformation.dateDue}</div>
          <Button className="bg-blue-500 hover:bg-blue-300" onClick={handleShow}>
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
                    <>{key}:</> {
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