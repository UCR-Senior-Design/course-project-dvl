import React, { useState } from 'react'
import { TEInput } from "tw-elements-react";
import { useNavigate } from "react-router-dom";
import MainLayout from './MainLayout';
import HomeNav from './HomeNav';
import Footer from './Footer';


const ContactUs = () => {
    const navigate = useNavigate();

  return (
    <div className="bg-gray-300">
        <div>
            <HomeNav/>
        </div>
            <div className="py-60 px-48">
            </div>
            
        <div>
            <Footer/>
        </div>
    </div>


  );
};
export default ContactUs;
