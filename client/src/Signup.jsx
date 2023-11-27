import React from 'react'
import { TEInput } from "tw-elements-react";

const Login = () => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
    }

    const [checked2, setChecked2] = React.useState(false);

    const handleChange2 = () => {
        setChecked2(!checked2);
    }

  return (
    <div>
        <div className="bg-gray-300 py-60 px-48">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold"> Welcome to Resume 322 </h1>
                <p className="pt-4 w-72 sm:w-72 md:w-96 leading-relaxed">  Resume 322 is commiteed to help new people int he industry to create a better environment for making Resume. </p>
                <div>
                    <p className="pt-3 w-60 sm:w-72 md:w-96 leading-6"> Full Name
                        <TEInput
                            type="email"
                            size="lg"
                            className="mb-6">
                        </TEInput>
                    </p>
                    <p className="pt-0 w-60 sm:w-72 md:w-96 leading-6"> Email Address
                        <TEInput
                            type="password"
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
                </div>

                <div className="mt-3">
                    <Checkbox
                        // style={{transform: "scale(5)",}}
                        label = " Sign up for our email list?"
                        value ={checked}
                        onChange={handleChange}
                        />
                </div>

                <div className="mt-3">
                    <Checkbox2
                        // style={{transform: "scale(5)",}}
                        label2 = " Remember my email and password"
                        value2 ={checked2}
                        onChange2={handleChange2}
                        />
                </div>
                
                <div>
                <p className="pt-3 w-60 sm:w-72 md:w-96 leading-10">Need help logging in? Contact us {'>'} </p>
                <p>Already a member? Set them up now {'>'}</p>
                </div>
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
