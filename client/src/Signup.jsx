import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { TEInput } from "tw-elements-react";
import { useNavigate } from "react-router-dom";
import MainLayout from './MainLayout';
import HomeNav from './HomeNav';
import Footer from './Footer';
import { GoogleLogin } from '@react-oauth/google';

import { signup } from './actions/auth.js';
import { AUTH } from './constants/actionTypes';

const initialState = { Name: '', email: '', password: '', confirmPassword: '' };

const Login = () => {
    const [form, setForm] = useState(initialState);
    const dispatch = useDispatch();

    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
    }

    const [checked2, setChecked2] = React.useState(false);

    const handleChange2 = () => {
        setChecked2(!checked2);
    }
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signup(form, navigate));
      };

    
    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

     try {
        dispatch({ type: AUTH, data: { result, token } });

        navigate.push('/');
     } catch (error) {
        console.log(error);
    }
    };

    const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

    const handleChange3 = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
        <div className="bg-gray-300">
            <div>
                <HomeNav/>
            </div>
            <div className="py-60 px-48">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold"> Welcome to Resume 322 </h1>
                <p className="pt-4 w-72 sm:w-72 md:w-96 leading-relaxed">  Resume 322 is commiteed to help new people in the industry to create a better environment for making Resume. </p>
                <form onSubmit={handleSubmit}>
                    <div>
                            <label for="name" class="block mt-4 mb-2 text-lg font-medium text-gray-900 dark:text-gray-600">Full Name</label>
                            <input name="name" id="Name" handleChange={handleChange3} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" required/>
                        </div>
                    <div>
                            <label for="email" class="block mt-4 mb-2 text-lg font-medium text-gray-900 dark:text-gray-600">Your email</label>
                            <input type="email" id="Email" handleChange={handleChange3} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required/>
                        </div>
                        <div>
                            <label for="password" class="block mt-4 mb-2 text-lg font-medium text-gray-900 dark:text-gray-600">Password</label>
                            <input type="password" id="Password" handleChange={handleChange3} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" required/>
                        </div>
                        <button type="submit" className= "mt-5 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white">Let's Start</button>
                            
                        <GoogleLogin 
                            onSuccess={credentialResponse => {
                                console.log(credentialResponse);
                            }}
                                onError={() => {
                                console.log('Login Failed');
                            }}
                        /> 
                </form>

                <div className="mt-3">
                    <Checkbox
                        // style={{transform: "scale(5)",}}
                        label = " Sign up for our email list?"
                        value ={checked}
                        onChange={handleChange}
                        />
                </div>

                <div className="mt-3 mb-3">
                    <Checkbox2
                        // style={{transform: "scale(5)",}}
                        label2 = " Remember my email and password"
                        value2 ={checked2}
                        onChange2={handleChange2}
                        />
                </div>
                
                <div>
                Need help logging in? {" "}
                <button className="text-blue-600 underline" onClick={() => navigate("/ContactUs")}>Contact us </button>
                </div>

                <div>
                Already a member? {" "}
                <button className="text-blue-600 underline" onClick={() => navigate("/Login")}>Login here </button>
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

const Checkbox2 = ({label2, value2, onChange2}) => {
    return(
        <label>
            <input type = "checkbox" checked2 ={value2} onChange2={onChange2} />
            {label2}
        </label>
    )
}
export default Login;
