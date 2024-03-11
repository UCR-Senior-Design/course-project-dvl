import React, { useState, useEffect, useContext  } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components"
import { createResume} from '../actions/resumes';
import editorContext from "../editorContext";
import { defaultResume } from '../constants/resumedefault';
import { useNavigate } from "react-router-dom";

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

export function Layout({ currentId, setCurrentId, props }) {
  const [resumeData, setResumeData] = useState({ resume: defaultResume});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setMarkdownText } = useContext(editorContext);
  var _ = require('lodash');

  useEffect(() => {
    const id = localStorage.getItem("current resume");
    if(id) {
      const eid = id.slice(1,-1);
      const newResume = JSON.parse(localStorage.getItem(`${eid}`));
      if (newResume) {
        setResumeData(newResume);
        localStorage.removeItem("current resume");
        localStorage.removeItem(`${eid}`);
      }
    }
  }, []);

  const onInputChange = e => {
    const newValue = e.currentTarget.value;
    setResumeData({ ...resumeData, resume: e.target.value });
    setMarkdownText(newValue);
  }

  const clear = () => {
    setCurrentId(0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(resumeData);
    const saveResume = _.omit(resumeData, ['createdAt', 'creator', '__v', '_id']);
    if (currentId === 0) {
      console.log(saveResume);
      dispatch(createResume(saveResume));
      clear();
    } else {
      clear();
    }
  };

  return <Container>
    <form className='h-full overflow-auto' autoComplete="off" noValidate onSubmit={handleSubmit}>
      <div className='flex flex-row'>
        <button className= "flex justify-center border-2 border-blue-500 px-6 py-2 ml-40 mb-4 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white" type="submit">Save PDF</button>
        <button className= "flex justify-center border-2 border-blue-500 px-6 py-2 ml-40 mb-4 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white" onClick={() => navigate("/LoadResume")}>Load PDF</button>
      </div>
      <h1 className="font-bold text-xl text-center border-b-4 border-gray-500/40">Markdown Text</h1>
      <TextArea name="resume" label="Resume" value={resumeData.resume} onChange={onInputChange}/>
    </form>
  </Container>
}
