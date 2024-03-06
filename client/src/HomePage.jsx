import React, { useState, useEffect } from 'react'
import MainLayout from './MainLayout'
import { Layout } from './layout/Layout'
import { Preview } from './layout/Preview'
import EditorContext from "./editorContext"
import { useDispatch } from 'react-redux';
import Navbar from './NavBar'
import Header from './Header'
import Footer from './Footer'

import { getResumes } from './actions/resumes';

const HomePage = () => {
  const [currentId, setCurrentId] = useState(0);
  const [newResume, setNewResume] = useState('')
  const dispatch = useDispatch();
  const  [markdownText, setMarkdownText] = useState("");
  const contextValue = {
    markdownText,
    setMarkdownText
  };

  useEffect(() => {
    dispatch(getResumes());
  }, [currentId, dispatch]);

  return (
    <EditorContext.Provider value={contextValue}>
    <Header/>
    <div>
        <div className="bg-gray-300 py-20 px-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold"> Easy Ways to Build a Beautiful Resume </h1>
                <p className="pt-4 w-60 sm:w-72 md:w-96 leading-6">  Ditch your google doc with a better resume crafting experience </p>
        </div>
         
        <div className='w-full h-full flex pb-1'>
          <Layout newResume={newResume} currentId={currentId} setCurrentId={setCurrentId} />
          <Preview />
        </div>

    </div>
    <Footer/>
    </EditorContext.Provider>
  );
};

export default HomePage;