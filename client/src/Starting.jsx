import React from 'react'
import { images } from "./constants";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Starting= () => {
    const navigate = useNavigate();
  return (
    <div>
        <img src={images.DVLlogo} alt="brand Logo" onClick={() => navigate("/MainLayout")}></img>
    </div>
  )
};

export default Starting