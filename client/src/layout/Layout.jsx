import React, { useContext, useState } from 'react'
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
  const [activeTab, setActiveTab] = useState('markdown');
  const [markdownText, setMarkdownTextState] = useState('');
  const [cssText, setCssText] = useState('');

  const onInputChange = e => {
    const newValue = e.currentTarget.value;
    setMarkdownText(newValue);
    setMarkdownTextState(newValue);
  }

  const onCssChange = (e) => {
    const newCssValue = e.currentTarget.value;
    setCssText(newCssValue);
  };

  const switchToMarkdown = () => {
    setActiveTab('markdown');
  };

  const switchToCSS = () => {
    setActiveTab('css');
  };

  return (
    <Container>
      <div className="flex justify-center mb-4">
        <button
          className={`mx-2 px-4 py-2 ${
            activeTab === 'markdown' ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
          onClick={switchToMarkdown}
        >
          Markdown
        </button>
        <button
          className={`mx-2 px-4 py-2 ${
            activeTab === 'css' ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
          onClick={switchToCSS}
        >
          CSS
        </button>
      </div>

      {activeTab === 'markdown' && (
        <>
          <h1 className="font-bold text-xl text-center border-b-4 border-gray-500/40">
            Markdown Text
          </h1>
          <TextArea value={markdownText} onChange={onInputChange} />
        </>
      )}

      {activeTab === 'css' && (
        <>
          <h1 className="font-bold text-xl text-center border-b-4 border-gray-500/40">
            CSS Text
          </h1>
          <TextArea value={cssText} onChange={onCssChange} />
        </>
      )}
    </Container>
  );
};
