import React, { useState } from 'react'
import MainLayout from './MainLayout'
import Navbar from './NavBar'
import Header from './Header'
import EditorContext from "./editorContext"
import Footer from './Footer'
import { images } from "./constants";



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
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Templates</h1>
                <p className="pt-4 w-60 sm:w-72 md:w-80 leading-6">  Feel free to use these templates to start your new Resume </p>
                <br/> <br/> <br/>
                <div className="flex gap-x-9 items-center margin-center justify-center">
                  <img src={images.RESUME1} alt="resume1" height={400} width={400}></img> <br/>
                  <img src={images.RESUME2} alt="resume2" height={400} width={400}></img> <br/>
                  <img src={images.RESUME3} alt="resume3" height={400} width={400}></img> <br/>
                </div>
        </div>
    <Footer/>
    </EditorContext.Provider>
  )
}

export default Templates