import './App.css';
import React from 'react'
import HomePage from './HomePage';
import Login from './Login';
import Templates from './Templates'
import Signup from './Signup'
import {Routes, Route} from 'react-router-dom';
import Navbar from './NavBar';
import MainLayout from './MainLayout';
import Starting from './Starting';
import { GoogleOAuthProvider} from '@react-oauth/google';

function App() {

  return (
    <GoogleOAuthProvider clientId="852007549024-0a6ccodb1tga0gqblp860cieu3dqlndl.apps.googleusercontent.com">
      <div className="App flex flex-col w-full h-full">
        <MainLayout/>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
