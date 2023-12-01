import React from "react";
import { Link } from "react-router-dom";
import Templates from './Templates';
import {Routes, Route} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import HomePage from "./HomePage";

function Navbar(){
    return(
        <nav className= "nav">
            <Routes>
                <Route path="/HomePage" element={<HomePage/>}/>
                <Route path="/Templates" element={<Templates/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Signup" element={<Signup/>}/>
              </Routes>
            </nav>
    );
}

export default Navbar;