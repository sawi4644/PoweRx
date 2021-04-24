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
        <Card.Title>Card Title</Card.Title>
        
        <Card.Text>
        {/* Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit */}
        {Object.entries(objectsToMap).map(section => {
          const [
            subtitles,
            selections,
          ] = section
          return (
            <>
              <Card.Subtitle className="mb-2">
                {subtitles}
              </Card.Subtitle>
              {Object.entries(selections).map((porc) => {
                const [key, value] = porc;
                return (
                  <p>
                    <strong>{key}:</strong> {value.toString()}
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
