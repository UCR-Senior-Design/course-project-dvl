import React, { useContext } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import editorContext from '../editorContext';

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

  console.log('Markdown Text: ', markdownText);

  return (
    <Container>
      <h1 className="font-bold text-xl text-center border-b-4 border-gray-500/40">Preview</h1>
      <PreviewArea className='preview'>
        <ReactMarkdown className="markdown" children={markdownText} />
      </PreviewArea>
    </Container>
  );
}
