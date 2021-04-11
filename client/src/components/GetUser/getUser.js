import React, { useState } from 'react'
import axios from 'axios';

const GetUser = () => {

   const [data, setData] = useState(null)

   const getUserInfo = () => {
     axios({
       method: "GET",
       withCredentials: true,
       url: "http://localhost:3001/User",
     }).then((res) => {
       setData(res.data);
       console.log(res.data);
     });
   };

  return (
    <div>
      <h1>Get User</h1>
      <button onClick={getUserInfo}>submit</button>
      {
        data ? <h1>welcome back {data.username}</h1> : null
      }
    </div>
  )
}

export default GetUser