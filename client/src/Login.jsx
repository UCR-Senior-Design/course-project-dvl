import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { TEInput } from "tw-elements-react";
import { useNavigate } from "react-router-dom";
// import MainLayout from './MainLayout'
import HomeNav from './HomeNav';
import Footer from './Footer';
import { GoogleLogin } from '@react-oauth/google';

import { signin } from './actions/auth.js';
import { AUTH } from './constants/actionTypes';

const initialState = { name: '', email: '', password: ''};

const Login = () => {
    const [form, setForm] = useState(initialState);
    const dispatch = useDispatch();
    // const [checked, setChecked] = React.useState(false);

    // const handleChange = () => {
    //     setChecked(!checked);
    // }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signin(form, navigate("/HomePage")));
      };

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (

    <div className="bg-gray-300">
    <div>
        <HomeNav/>
    </div>
    <div className="py-60 px-48">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold"> Welcome Back! </h1>
                <p className="pt-4 w-72 sm:w-72 md:w-96 leading-relaxed">  At DVL we are continually striving to improve accessibility of our products
                and services. If you have any questions or suggestions regarding our services, we welcome your feedback. </p>
                <form onSubmit={handleSubmit}>
                    
                <div>
                    <label for="email" class="block mt-4 mb-2 text-lg font-medium text-gray-900 dark:text-gray-600">Your email</label>
                    <input name="email" type="email" id="email" onChange={handleChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required/>
                </div>
                <div>
                    <label for="password" class="block mt-4 mb-2 text-lg font-medium text-gray-900 dark:text-gray-600">Password</label>
                    <input name="password" type="password" id="password" onChange={handleChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" required/>
                </div>
                <button type="submit" className="mt-5 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white">Login</button>
                </form>

                {/* <div className="mt-3 mb-3">
                    <Checkbox
                        // style={{transform: "scale(5)",}}
                        label = " Remember my email and password"
                        value ={checked}
                        onChange={handleChange}
                        />
                </div> */}
                
                <div>
                Need help logging in? {" "}
                <button className="text-blue-600 underline" onClick={() => navigate("/ContactUs")}>Contact us </button>
                </div>
                
                <div>
                New member? {" "}
                <button className="text-blue-600 underline" onClick={() => navigate("/Signup")}>Sign up now </button>
                </div>
                </div>
                <div>
            <Footer/>
          </div>
          </div>
    
  );
};

const Checkbox = ({label, value, onChange}) => {
    return(
        <label>
            <input type = "checkbox" checked ={value} onChange={onChange} />
            {label}
        </label>
    )
}
export default Login;
