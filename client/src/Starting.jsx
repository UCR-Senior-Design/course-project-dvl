import React, { useState } from 'react'
import { images } from "./constants";
import { useNavigate } from "react-router-dom";


const Starting = () => {
    const navigate = useNavigate();
    const [show, setShow]=useState(true)
    return (
        <div className="Start">
            {
                show?<section className= "bg-dark-hard">
                <footer className="py-10 px-8 text-center bg-gray-800">
                <div className="container" align="center" class="center" onClick={()=>setShow(false)}>
                    <img src={images.DVLlogo} alt="brand Logo" onClick={() => navigate("/HomePage")}></img>
                </div>
                </footer>
                </section>:null
            }
            
        </div>
        
    );
  };

export default Starting