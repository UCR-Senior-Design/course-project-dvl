import React from 'react'
import MainLayout from './MainLayout'

const Login = () => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
    }

    const ColoredLine = ({ color }) => (
    <hr
        style={{
            borderTop: "2px solid #000000 ", 
            marginLeft: 75, marginRight: 20,
            height: 5
        }}
    />
    );


  return (
    <div>
        <div className="bg-gray-300 py-60 px-60">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold"> Welcome Back! </h1>
                <p className="pt-4 w-72 sm:w-72 md:w-96 leading-relaxed">  At DVL we are continually striving to improve accessibility of our products
                and services. If you have any questions or suggestions regarding our services, we welcome your feedback. </p>
                <div>
                    <p className="pt-10 w-60 sm:w-72 md:w-96 leading-6"> Email</p>
                    <ColoredLine color />
                    <p className="pt-4 w-60 sm:w-72 md:w-96 leading-6"> Password </p>
                    <ColoredLine color />
                </div>

                <div>
                    <Checkbox
                        // style={{transform: "scale(5)",}}
                        label = " Remember my email and password"
                        value ={checked}
                        onChange={handleChange}
                        />
                </div>
                
                <div>
                <p className="pt-20 w-60 sm:w-72 md:w-96 leading-10">Need help logging in? Contact us {'>'} </p>
                <p>New member? Sign up now {'>'}</p>
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
export default Login;
