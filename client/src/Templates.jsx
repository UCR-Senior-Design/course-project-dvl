import React, { useState } from 'react'
import Header from './Header'
import EditorContext from "./editorContext"
import Footer from './Footer'
import resumeType1P from './assets/resumeType1.svg'
import resumeType2P from './assets/resumeType2.png'
import {resumeType1} from './constants/resumeType1'
import {resumeType2} from './constants/resumeType2'
import { useNavigate } from 'react-router-dom';


const Templates = () => {
  const navigate = useNavigate();
  const  [markdownText, setMarkdownText] = useState("");
  const contextValue = {
    markdownText,
    setMarkdownText
  };

  const handleTemplateClick1 = async () => {
    localStorage.setItem('1', JSON.stringify({resume: resumeType1}));
    localStorage.setItem("current resume", JSON.stringify('1'));
    navigate('/HomePage'); // Navigate to the homepage
  };

  const handleTemplateClick2 = async () => {
    localStorage.setItem('2', JSON.stringify({resume: resumeType2}));
    localStorage.setItem("current resume", JSON.stringify('2'));
    navigate('/HomePage'); // Navigate to the homepage
  };
  return (
    <EditorContext.Provider value={contextValue}>
    <Header/>
        <div className="bg-gray-300 py-20 px-12" align="center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Templates</h1>
                <p className="pt-4 w-60 sm:w-72 md:w-80 leading-6">  Feel free to use these templates to start your new Resume </p>
                <br/> <br/> <br/>
                <div className="flex gap-x-9 items-center margin-center justify-center">
                  <div>
                    <img src={resumeType1P} alt="resume1" height={400} width={400} onClick={() => handleTemplateClick1()} ></img> <br/>
                  </div>
                  <div>
                    <img src={resumeType2P} alt="resume2" height={400} width={400} onClick={() => handleTemplateClick2()} ></img> <br/>
                  </div>
                </div>
        </div>
    <Footer/>
    </EditorContext.Provider>
  )
}

export default Templates