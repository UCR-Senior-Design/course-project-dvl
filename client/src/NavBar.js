import React from "react";
import {Routes, Route} from 'react-router-dom';
import HomePage from "./HomePage";
import Templates from './Templates';
import Signup from './Signup';
import Login from './Login';


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