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
      windowWidth: 650 //window width in CSS pixels
    });
  };
  return (
    <Container>
      <h1 className="font-bold text-xl text-center border-b-4 border-gray-500/40">Preview</h1>
      <PreviewArea className='preview overflow-y-scroll border-b-4' ref={pdfRef}>
        <ReactMarkdown children={markdownText} className="markdown" />
      </PreviewArea>
    
    </Container>
  );
}
