import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import editorContext from '../editorContext';
import { jsPDF } from "jspdf";
import markdownIt from 'markdown-it';

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

export function Preview() {
  const { markdownText } = useContext(editorContext);
  const pdfRef = useRef(null);

  const handleGeneratePDF = () => {
    console.log(markdownText);
    const jspdf = new jsPDF();

    // Convert Markdown to HTML
    const md = new markdownIt();
    const htmlContent = md.render(markdownText);
    console.log(htmlContent);
    // Generate PDF from HTML
    jspdf.html(htmlContent, {
      callback: function (jspdf) {
        jspdf.save('markdown.pdf');
      },
      x: 15,
      y: 15,
      width: 170, //target width in the PDF document
      windowWidth: 700 //window width in CSS pixels
    });
  };
  return (
    <Container className='overflow-y-scroll'>
      <div>
        <button className= "flex justify-center border-2 border-blue-500 px-6 py-2 ml-40 mb-4 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white"onClick={handleGeneratePDF}>Generate PDF</button>
      </div>
      <h1 className="font-bold text-xl text-center border-b-4 border-gray-500/40">Preview</h1>
      <PreviewArea className='preview border-b-4' ref={pdfRef}>
        <ReactMarkdown children={markdownText} className="markdown" />
      </PreviewArea>
    
    </Container>
  );
}
