import React from 'react'
import styled from "styled-components"
import ReactMarkdown from "react-markdown";

const Container = styled.div`
  width: 50%;
  height: 48rem;
  padding: 32px;
`;

const PreviewArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 17px;
`;

export function Preview(props) {
    return <Container>
        <h1 className="font-bold text-xl text-center border-b-4 border-gray-500/40">Preview</h1>
        <PreviewArea>
            <ReactMarkdown source='# Hello' />
        </PreviewArea>
    </Container>
}