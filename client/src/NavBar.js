import React from "react";
import {Routes, Route} from 'react-router-dom';
import HomePage from "./HomePage";
import Templates from './Templates';
import Signup from './Signup';
import Login from './Login';
import ContactUs from "./ContactUs";
import LoadResume from "./LoadResume";


function Navbar(){
    return(
        <nav className= "nav">
            <Routes>
                <Route path="/HomePage" element={<HomePage/>}/>
                <Route path="/Templates" element={<Templates/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Signup" element={<Signup/>}/>
                <Route path="/ContactUs" element={<ContactUs/>}/>
                <Route path="/LoadResume" element={<LoadResume/>}/>
            </Routes>
        </nav>
    );
}

export default Navbar;