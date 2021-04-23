import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

//code to push up to main

const Hero = () => {

    const [error, setError] = useState("");
    const { currentUser, logout, createToken } = useAuth();
    // const history = useHistory();

    // // console.log(currentUser)

    // async function handleLogout() {
    //   setError("");
    //   try {
    //     await logout();
    //     history.push("/login");
    //   } catch {
    //     setError("Failed to log out");
    //   }
    // }

    return (
      <div className="bg-white h-screen flex flex-col justify-center items-center">
        <h1 className="lg:text-9xl md:text:7xl sm:text-5xl text-3xl font-black mb-14">
          {" "}
          PoweRx
        </h1>


        <Link
          className="py-6 px-10 bg-blue-400 rounded-full text-3xl hover:bg-blue-200 transition duration-500 ease-in-out flex items-center animate-bounce"
          to="./form"
        >
          New RX Form
          <svg
            className="w-6 h-6 ml-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </Link>

        <Link
          className="py-6 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center"
          to="./history"
        >
          Past Forms
          <svg
            className="w-6 h-6 ml-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
            />
          </svg>
        </Link>
      </div>
    );
}

export default Hero
