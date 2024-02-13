import React, { useContext } from 'react'
import styled from "styled-components"
import editorContext from "../editorContext";

const Container = styled.div`
  width: 50%;
  height: 48rem;
  padding: 32px;
  border-right: 1.5px solid rgba(15,15,15,0.4);
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  font-size: 17px;
`;

export function Layout(props) {

  const { setMarkdownText } = useContext(editorContext);

  const onInputChange = e => {
    const newValue = e.currentTarget.value;
    setMarkdownText(newValue);
  }

  return <Container>
    <h1 className="font-bold text-xl text-center border-b-4 border-gray-500/40">Markdown Text</h1>
    <TextArea onChange={onInputChange}/>
  </Container>
}
