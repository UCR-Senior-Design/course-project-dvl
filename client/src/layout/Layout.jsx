import React, { useContext, useState } from 'react'
import styled from "styled-components"
import editorContext from "../editorContext";
import cssContext from "../cssContext";

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
            activeTab === 'markdown' ? "border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white" : 'g-gray-300"border-2 border-gray-500 px-6 py-2 rounded-full text-white-500 font-semibold hover:bg-gray-500 hover:text-white"'
          }`}
          onClick={switchToMarkdown}
        >
          Markdown
        </button>
        <button
          className={`mx-2 px-4 py-2 ${
            activeTab === 'css' ? "border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white" : 'g-gray-300"border-2 border-gray-500 px-6 py-2 rounded-full text-white-500 font-semibold hover:bg-gray-500 hover:text-white"'
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
