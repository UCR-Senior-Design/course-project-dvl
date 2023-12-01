import React from 'react';
import { images } from "./constants";
import { useNavigate } from "react-router-dom";


const HomeNav = () => {
  const navigate = useNavigate();
  return (
    <section>
        <header className="flex justify-between items-center py-x px-8 text-center bg-gray-800">
            <div>
            <img src={images.DVLlogo} alt="brand Logo" height={100} width={100} onClick={() => navigate("/HomePage")}></img>
            </div>
        </header>
    </section>
    
  );
};

export default HomeNav;