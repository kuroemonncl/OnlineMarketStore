import React from "react";
import { useNavigate } from "react-router-dom";
const SignOut = ({ onHandleClick }) => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    // Clear authentication token from local storage
    localStorage.removeItem("token");
    console.log("Click signout");
  
    navigate("/");
  };

  return (
    <div>
      <button
        onClick={() => {
          handleSignOut();
          onHandleClick();
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default SignOut;
