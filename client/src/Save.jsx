import React, { useState, useEffect, useContext  } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { createResume, updateResume } from './actions/posts';
import editorContext from "./editorContext";

const Save = ({ currentId, setCurrentId }) => {
    const [postData, setResumeData] = useState({ resume: ''});
    const post = useSelector((state) => (currentId ? state.posts.find((resume) => resume._id === currentId) : null));
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (post) setResumeData(post);
    }, [post]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (currentId === 0) {
        dispatch(createResume(postData));
        clear();
      } else {
        dispatch(updateResume(currentId, postData));
        clear();
      }
    };
  
    return (
        <button className= "flex justify-center border-2 border-blue-500 px-6 py-2 ml-40 mb-4 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white">Save Resume</button>
    );
  };
  
  export default Save;