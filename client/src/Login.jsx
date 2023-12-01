import React from 'react'
import { TEInput } from "tw-elements-react";
import { useNavigate } from "react-router-dom";
import MainLayout from './MainLayout'
const Login = () => {
    
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
    }

    const navigate = useNavigate();

  return (
    <MainLayout>
        <div className="bg-gray-300 py-60 px-48">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold"> Welcome Back! </h1>
                <p className="pt-4 w-72 sm:w-72 md:w-96 leading-relaxed">  At DVL we are continually striving to improve accessibility of our products
                and services. If you have any questions or suggestions regarding our services, we welcome your feedback. </p>
                <div>
                    <p className="pt-3 w-60 sm:w-72 md:w-96 leading-6"> Email address
                        <TEInput
                            type="email"
                            size="lg"
                            className="mb-6">
                        </TEInput>
                    </p>
                    <p className="pt-0 w-60 sm:w-72 md:w-96 leading-6"> Password
                        <TEInput
                            type="password"
                            size="lg"
                            className="mb-6">
                        </TEInput>
                    </p>
                    <button className= "border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white">Let's Start</button> 
                </div>

                <div className="mt-3">
                    <Checkbox
                        // style={{transform: "scale(5)",}}
                        label = " Remember my email and password"
                        value ={checked}
                        onChange={handleChange}
                        />
                </div>
                
                <div>
                <p className="pt-3 w-60 sm:w-72 md:w-96 leading-10">Need help logging in? Contact us {'>'} </p>
                <p>New member? Sign up now {'>'}</p>
                </div>
                <button onClick={() => navigate("/Home")}>Home</button>
          </div>
    </MainLayout>

    
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
