import React, {useState, useEffect, useContext,} from 'react'
// import Wrapper from '../Wrapper/wrapper'
// import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import sampleData from './sampleData'
import API from '../../utils/API'
// import {FormContext} from '../../contexts/AuthContext'
import {
  Link,
  useLocation,
  useHistory 
} from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext'




const RxHistory = () => {

  let history = useHistory();
  const { currentUser, createToken } = useAuth()

  

  // createToken().then((Headers) => console.log(Headers))

  // console.log(currentUser.uid)
  

  const [allPorcelain, setAllPorcelain] = useState({
      techRec: false,
      layeredEmax: false,
      monoEmax: false,
      LayeredZirconia: false,
      monoZirconia: false,
      composite: false, 
    });

    useEffect(() => {
      console.log("Friday")
       RxHistoryForm()
    }, [])
    
    const RxHistoryForm = e => {
        // e.preventDefault()
        console.log("Thursday")
        createToken().then(headers => {
          console.log(headers)
          API.getHistory(currentUser.uid, headers)
          .then(data => {
          console.log("Nick", data)
        })
        .catch(err => console.log(err))
        
            // getToken().then(headers => {
            //     API.getHistory({ allPorcelain, userId: currentUser.uid }, headers)
            //         .then(data => {
            //             console.log("Nick", data)
            //         })
            //         .catch(err => console.log(err))
            // })
    })}

  return (
        <>
          
        </>
  );

}

export default RxHistory