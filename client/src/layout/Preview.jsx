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

export function Preview(props) {

    const { markdownText } = useContext(editorContext);

    console.log("Converted Text: ", markdownText);

    return <Container>
        <h1 className="font-bold text-xl text-center border-b-4 border-gray-500/40">Preview</h1>
        <PreviewArea>
            <ReactMarkdown children={markdownText} className="markdown" />
        </PreviewArea>
    </Container>
}