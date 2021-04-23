import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const Navbar = ({ toggle }) => {
  const [error, setError] = useState("");
  const { currentUser, logout, createToken } = useAuth();
  const history = useHistory();

  // console.log(currentUser)

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <nav
      className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
      role="navigation"
    >
      <Link to="/" className="pl-8">
        PoweRx
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <Link className="p-4" to="/">
          Home
        </Link>

        <Link className="p-4" to="/about">
          About
        </Link>

        <Link className="p-4" to="/update-profile">
          Update Profile
        </Link>

        <Link className="p-4" to="/form">
          Rx Form
        </Link>

        <Link className="p-4" to="/history">
          History
        </Link>
        <Link className="p-4" to="/logout" onClick={handleLogout}>
          Log Out
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
