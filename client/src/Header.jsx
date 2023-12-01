import React from 'react';
import { images } from "./constants";
import { useNavigate } from "react-router-dom";
import Templates from './Templates';
import {Routes, Route} from 'react-router-dom';
import Navbar from './NavBar';
import Login from './Login';
import Signup from './Signup';

const Header = () => {
  const navigate = useNavigate();
  return (
    <section>
        <header className="flex justify-between items-center py-x px-8 text-center bg-gray-800">
            <div>
            <img src={images.DVLlogo} alt="brand Logo" height={100} width={100}></img>
            </div>
            <div className="flex gap-x-9 items-center">
              <ul className="flex gap-x-5">
              <button className= "border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white" onClick={() => navigate("/Templates")}>Template</button> 
              <button className= "border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white" onClick={() => navigate("/Signup")}>Sign Up</button>
              <button className= "border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white" onClick={() => navigate("/Login")}>Log In</button>
              </ul>
            </div>
        </header>
    </section>
  );
};

export default Header;