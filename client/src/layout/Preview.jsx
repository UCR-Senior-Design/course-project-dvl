import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import editorContext from '../editorContext';
import { jsPDF } from "jspdf";

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
    const jspdf = new jsPDF('p', 'pt', 'letter');

    const data = {
      callback: function (jspdf) {
        jspdf.save('resume.pdf');
      },
      margin: [10, 10, 10, 10],
      autoPaging: 'text',
    };

    jspdf.html(pdfRef.current.innerHTML, data);
  };
  
  return (
    <Container>
      <div>
      <button className= "flex justify-center border-2 border-blue-500 px-6 py-2 ml-40 mb-4 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white"onClick={handleGeneratePDF}>Generate PDF</button>
      </div>
      <h1 className="font-bold text-xl text-center border-b-4 border-gray-500/40">Preview</h1>
      <PreviewArea className='preview' ref={pdfRef}>
        <ReactMarkdown children={markdownText} className="markdown" />
      </PreviewArea>
    </Container>
  );
}
