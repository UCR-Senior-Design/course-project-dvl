import './App.css';
import React from 'react'
import HomePage from './HomePage';
import Login from './Login';
import Templates from './Templates'
import Signup from './Signup'

function App() {

  return (
    <div className="App flex flex-col w-full h-full">
      <Signup />
    </div>

  );
}

export default Signup;
