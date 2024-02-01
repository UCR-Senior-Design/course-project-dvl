import React, { useState, useEffect } from 'react';
import { images } from "./constants";
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actionType from './constants/actionTypes';
// import Templates from './Templates';
// import {Routes, Route} from 'react-router-dom';
// import Navbar from './NavBar';
// import Login from './Login';
// import Signup from './Signup';
const { default: decode } = require("jwt-decode");


const Header = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    navigate('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
  
  return (
    <section>
        <header className="flex justify-between items-center py-x px-8 text-center bg-gray-800">
            <div>
            <img src={images.DVLlogo} alt="brand Logo" height={100} width={100} onClick={() => navigate("/HomePage")}></img>
            </div>
            <div className="flex gap-x-9 items-center">
            {user?.result ? (
              <div >
                <div alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</div>
                <div variant="h6">{user?.result.name}</div>
                <button className= "border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white" onClick={() => navigate("/Templates")}>Templates</button>
                <button className= "border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white" color="secondary" onClick={logout}>Logout</button>
              </div>
            ) : (
              <ul className="flex gap-x-5">
              <button className= "border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white" onClick={() => navigate("/Templates")}>Templates</button>
              <button className= "border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white" onClick={() => navigate("/Signup")}>Sign In</button>
              <button className= "border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white" onClick={() => navigate("/Login")}>Log In</button>
              </ul> 
              
            )}
            </div>
        </header>
    </section>
    
  );
};

export default Header;