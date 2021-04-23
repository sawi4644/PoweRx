import React from 'react'
import { Card } from 'react-bootstrap'

export default function MyCard(props) {

  const objectsToMap = {
    "All Porcelain": props.allPorcelain,
    // "PFM": props.pfm
  }


  console.log(props)
  return (
     
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Rx Form</Card.Title>
        <Card.Text>
        {Object.entries(objectsToMap).map(section => {
          const [
            subtitles,
            selections,
          ] = section
          return (
            <>
              <Card.Subtitle className="flex-initial mb-2">
                {subtitles}
              </Card.Subtitle>
              {Object.entries(selections).map((porc) => {
                const [key, value] = porc;
                return (
                  <p>
                    <strong>{key}:</strong> {value === true ? "✓" : "✗"}
                  </p>
                );
              })}
            </>
          );
        })}
        
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
   
  );
}