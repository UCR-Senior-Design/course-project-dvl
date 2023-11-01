import React from 'react';
import { images } from "./constants";

const Header = () => {
  return (
    <section>
        <header className="flex justify-between items-center py-x px-8 text-center bg-gray-800">
            <div>
            <img src={images.DVLlogo} alt="brand Logo" height={100} width={100}></img>
            </div>
            <div className="flex gap-x-9 items-center">
              <ul className="flex gap-x-5">
              <button className= "border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white">Template</button> 
              <button className= "border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white">Sign Up</button>
              <button className= "border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white">Log In</button>
              </ul>
            </div>
        </header>
    </section>
  );
};

export default Header;