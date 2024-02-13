import React, { useState } from 'react'
import MainLayout from './MainLayout'
import { Layout } from './layout/Layout'
import { Preview } from './layout/Preview'
import EditorContext from "./editorContext"
import Navbar from './NavBar'
import Header from './Header'
import Footer from './Footer'






const HomePage = () => {
  const  [markdownText, setMarkdownText] = useState("");
  const contextValue = {
    markdownText,
    setMarkdownText

  
  };


  return (
    <EditorContext.Provider value={contextValue}>
    <Header/>
    <div>
        <div className="bg-gray-300 py-20 px-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold"> Easy Ways to Build a Beautiful Resume </h1>
                <p className="pt-4 w-60 sm:w-72 md:w-96 leading-6">  Ditch your google doc with a better resume crafting experience </p>
                

        </div>
        <div className='w-full h-full flex pb-1'>
          <Layout />
          <Preview />
        </div>

    </div>
    <Footer/>
    </EditorContext.Provider>
  );
};

export default HomePage;