import React, { useState, useEffect, useContext, } from 'react'
// import Wrapper from '../Wrapper/wrapper'
// import Form from 'react-bootstrap/Form'
import { Button, Card, Container } from 'react-bootstrap'
// import sampleData from './sampleData'
import API from '../../utils/API'
// import {FormContext} from '../../contexts/AuthContext'
import { useHistory } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext'
import MyCard from '../Card/MyCard'

const RxHistory = () => {
  let history = useHistory();
  const { currentUser, createToken } = useAuth()
  const [filledForm, setFilledForm] = useState({
    // techRec: false,
    // layeredEmax: false,
    // monoEmax: false,
    // LayeredZirconia: false,
    // monoZirconia: false,
    // composite: false, 
  });
  useEffect(() => {
    RxHistoryForm()
  }, [])

  const RxHistoryForm = e => {
    createToken().then(headers => {
      API.getHistory(currentUser.uid, headers)
        .then(data => {
          setFilledForm(data)
        })
        .catch(err => console.log(err))
    })
  }
  return (
    <div>
     {filledForm.data(form)}.map(data => (
       <p>{filledForm[data]}</p>
     ))}

    </div>
    // <div>
    //   {Object.entries(filledForm.data).map((oneForm) => {
    //     const [
    //       key,
    //       obj,
    //     ] = oneForm
    //     console.log(oneForm)
    //     return(
    //       <MyCard>{filledForm}</MyCard>
    //     )
    //   })}
    // </div>
    // <MyCard>{console.log(filledForm.data)}</MyCard>
  );
}
export default RxHistory