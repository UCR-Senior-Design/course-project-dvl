import React, { useState } from 'react'
import MainLayout from './MainLayout'
import { Layout } from './layout/Layout'
import { Preview } from './layout/Preview'
import EditorContext from "./editorContext"


const HomePage = () => {
  const  [markdownText, setMarkdownText] = useState("");

  const contextValue = {
    markdownText,
    setMarkdownText
  };
  return (
    <EditorContext.Provider value={contextValue}>
    <div>
        <MainLayout>
        <div className="bg-gray-300 py-20 px-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold"> Easy Ways to Build a Beautiful Resume </h1>
                <p className="pt-4 w-60 sm:w-72 md:w-96 leading-6">  Ditch your google doc with a better resume crafting experience </p>
                <button className= "border-2 border-blue-500 px-6 py-2 mt-4 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white">Let's Start</button> 
        </div>
        <div className='w-full h-full flex pb-1'>
          <Layout />
          <Preview />
        </div>
        </MainLayout>
    </div>
    </EditorContext.Provider>
  );
};

export default HomePage;