import React, { useContext } from 'react'
import styled from "styled-components"
import ReactMarkdown from "react-markdown";
import editorContext from '../editorContext';
import Markdown from 'react-markdown';

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
`;
const StyledMarkdown = styled.div`
  /* Add your global CSS styles here */
  p {
    /* Example: Customize the style for paragraphs */
    color: #333;
    font-size: 16px;
  }

  /* Add more styles as needed */

  /* Apply CSS from user input */
  ${({ cssText }) => cssText}
`;

export function Preview(props) {
  const { markdownText, cssText } = useContext(editorContext);

  console.log('Markdown Text: ', markdownText);
  console.log('CSS Text: ', cssText);

  return (
    <Container>
      <h1 className="font-bold text-xl text-center border-b-4 border-gray-500/40">Preview</h1>
      <PreviewArea>
        <StyledMarkdown cssText={cssText}>
          <ReactMarkdown children={markdownText} className="markdown" />
        </StyledMarkdown>
      </PreviewArea>
    </Container>
  );
}