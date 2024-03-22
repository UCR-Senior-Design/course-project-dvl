import React, { useState, useEffect } from 'react';
import { images } from "./constants";
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actionType from './constants/actionTypes';
import { jwtDecode } from "jwt-decode";
import { googleLogout  } from '@react-oauth/google';

const Header = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    googleLogout();
    dispatch({ type: actionType.LOGOUT });

    navigate('/HomePage');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = jwtDecode(token);

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
            {user?.result? (
              <div className="flex gap-x-5">
                <div className= "border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold">{user?.result.name}</div>
                <button className= "border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white" onClick={() => navigate("/Templates")}>Templates</button>
                <button className= "border-2 border-red-500 px-6 py-2 rounded-full text-red-500 font-semibold hover:bg-blue-500 hover:text-white" color="secondary" onClick={logout}>Logout</button>
              </div>
            ) : (
              <ul className="flex gap-x-5">
              <button className= "border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white" onClick={() => navigate("/Templates")}>Templates</button>
              <button className= "border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white" onClick={() => navigate("/Signup")}>Sign Up</button>
              <button className= "border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white" onClick={() => navigate("/Login")}>Log In</button>
              </ul>    
            )}
            </div>
        </header>
    </section>
    
  );
};

export default Header;