import react from 'react';
import Form from 'react-bootstrap/Form'


function allPorcelain() {

    const checkUpdate = (e) => {
        // const name = e.target.name
        // setAllPorcelain({
        //   ...allPorcelain,
        //   [name]: !allPorcelain[name]
        // })
        // console.log("This is the form", allPorcelain)
      }


return (
    <div>
        
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
    </div>
)



    
}

export default allPorcelain
