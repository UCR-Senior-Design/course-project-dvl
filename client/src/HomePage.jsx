import React, { useContext, useRef, useState } from 'react';
import MainLayout from './MainLayout';
import { Layout } from './layout/Layout';
import EditorContext from './editorContext';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import html2pdf from 'html2pdf.js'; 

const Container = styled.div`
  width: 50%;
  height: 48rem;
  padding: 32px;
`;

const PreviewArea = styled.div`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
`;

const HomePage = () => {
  const [markdownText, setMarkdownText] = useState("");
  const contextValue = {
    markdownText,
    setMarkdownText
  };
  const pdfRef = useRef(null);

  const handleGeneratePDF = () => {
    const options = {
      margin: 20,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf(pdfRef.current, options);
  };

  return (
    <EditorContext.Provider value={contextValue}>
      <Header />
      <div>
        <div className="bg-gray-300 py-20 px-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold"> Easy Ways to Build a Beautiful Resume </h1>
          <p className="pt-4 w-60 sm:w-72 md:w-96 leading-6"> Ditch your Google Doc with a better resume crafting experience </p>
          <div className="flex justify-center items-center">
            <button className="flex justify-center border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white" onClick={handleGeneratePDF}>Generate PDF</button>
          </div>
        </div>
        <div className='w-full h-full flex pb-1'>
          <Layout />
          <Container>
            <h1 className="font-bold text-xl text-center border-b-4 border-gray-500/40">Preview</h1>
            <PreviewArea className='preview overflow-y-scroll border-b-4' ref={pdfRef}>
              <ReactMarkdown children={markdownText} className="markdown" />
            </PreviewArea>
          </Container>
        </div>
      </div>
      <Footer />
    </EditorContext.Provider>
  );
};

export default HomePage;