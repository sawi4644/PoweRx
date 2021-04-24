import React, {useState, useEffect, useContext,} from 'react'
// import Wrapper from '../Wrapper/wrapper'
// import Form from 'react-bootstrap/Form'
// import { Button, Card, Container } from 'react-bootstrap'
import API from '../../utils/API'
import {useHistory } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext'
import MyCard from '../Card/MyCard'


const RxHistory = () => {
  let history = useHistory();


  const { currentUser, createToken } = useAuth()
  const [filledForm, setFilledForm] = useState([]);
    useEffect(() => {
       RxHistoryForm()
    }, [])


    const RxHistoryForm = e => {
        createToken().then(headers => {
          API.getHistory(currentUser.uid, headers)
          .then(response => {
          console.log(response.data)
          setFilledForm(response.data)
        })
        .catch(err => console.log(err))
    })}

    
  return (
    <div className="flex flex-wrap flex-row">
      {/* <pre>{JSON.stringify(filledForm, null, 2)}</pre> */}
      {filledForm.map((oneForm) => {
        return(
          <MyCard {...oneForm}></MyCard>
        )
      })}
    </div>
  );
}
export default RxHistory