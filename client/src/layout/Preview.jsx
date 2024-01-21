import React, { useContext } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import editorContext from '../editorContext';
import cssContext from '../cssContext';

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
  font-size: 17px;

  /* Apply user-input CSS to the rendered Markdown content */
  ${props => props.cssText}
`;

export function Preview(props) {
  const { markdownText, cssText } = useContext(editorContext);

  console.log('Markdown Text: ', markdownText);
  console.log('CSS Text: ', cssText);

  return (
    <Container>
      <h1 className="font-bold text-xl text-center border-b-4 border-gray-500/40">Preview</h1>
      <PreviewArea cssText={cssText}>
        <ReactMarkdown className="markdown" children={markdownText} />
      </PreviewArea>
    </Container>
  );
}
