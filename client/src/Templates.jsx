import React, { useState } from 'react'
import MainLayout from './MainLayout'
import Navbar from './NavBar'
import Header from './Header'
import EditorContext from "./editorContext"
import Footer from './Footer'



const Templates = () => {
  const  [markdownText, setMarkdownText] = useState("");
  const contextValue = {
    markdownText,
    setMarkdownText
  };
  return (
    <EditorContext.Provider value={contextValue}>
    <Header/>

    
        <div className="bg-gray-300 py-20 px-12" align="center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold"> Templates </h1>
                <p className="pt-4 w-60 sm:w-72 md:w-80 leading-6">  Feel free to use these templates to start your new Resume </p>
        </div>
    <Footer/>
    </EditorContext.Provider>
  )
}

export default Templates