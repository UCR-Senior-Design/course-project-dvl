import React from 'react'
import { images } from "./constants";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <section className= "bg-dark-hard">
       <footer className="py-10 px-8 text-center bg-gray-800">
        <div className="container" align="center" class="center">
          <img src={images.DVLlogo} alt="brand Logo" height={100} width={100}></img>
        </div>
        <p className="text-gray-400" >&copy; 2023 DVL. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Footer;