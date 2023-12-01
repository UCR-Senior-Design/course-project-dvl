import './App.css';
import React from 'react'
import HomePage from './HomePage';
import Login from './Login';
import Templates from './Templates'
import Signup from './Signup'
import {Routes, Route} from 'react-router-dom';
import Navbar from './NavBar';
import MainLayout from './MainLayout';

function App() {

  return (
    <div className="App flex flex-col w-full h-full">
      <HomePage/>
    </div>

  );
}

export default App;
