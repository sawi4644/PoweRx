import React from 'react'
import Wrapper from '../../components/Wrapper/wrapper'
import sampleData from './sampleData'

const RxForm = () => {

  console.log(sampleData)


  return (
    <Wrapper>
      <div>{sampleData['All Porcelain'].LabTime}</div>
      <div>{
      Object.keys
      (sampleData['All Porcelain'].ListItems).map(listItem => (
        <div className="form-check">
          {
            sampleData['All Porcelain'].ListItems[listItem]
            ? (
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" defaultChecked
            />)
            : (
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" 
              />)
          }
          <label className="form-check-label" htmlFor="flexCheckDefault">
            {sampleData['All Porcelain'].ListItems[listItem].toString()}
            {listItem}
          </label>
        </div>
      ))}
      </div>
    </Wrapper>
  )

}

export default RxForm