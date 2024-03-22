import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getResumesByCreator } from './actions/resumes.js';
import { deleteResume } from './actions/resumes';

const LoadResume = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const resumes = useSelector(state => state.resumes);
  const user = JSON.parse(localStorage.getItem('profile'));
  console.log(resumes);
  useEffect(() => {
    const fetchResumes = async () => {
      if (user?.result._id) {
        dispatch(getResumesByCreator(user.result._id));
      } else if (user?.result.sub) {
        dispatch(getResumesByCreator(user.result.sub));
      } 
    };

    fetchResumes();
  }, [dispatch, user]);

  const handleResumeClick = async (resume) => {
    localStorage.setItem(resume._id, JSON.stringify(resume));
    localStorage.setItem("current resume", JSON.stringify(resume._id));
    navigate('/HomePage');
  };

  const handleDeleteResumeClick = async (resumeID) => {
    dispatch(deleteResume(resumeID));
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <Header/>
      <div className="flex-grow p-10">
        {resumes.map(resume => (
          <div key={resume._id} className='flex flex-row py-2'>
            <div>
              <p>{resume._id}</p>
              <p>{resume.creator}</p>
              <p>{resume.createdAt}</p>
            </div>
            <button onClick={() => handleResumeClick(resume)} className="ml-2 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white">Load Resume</button>
            <button onClick={() => handleDeleteResumeClick(resume._id)} className="ml-2 border-2 bg-red-500 px-6 py-2 rounded-full text-white font-semibold hover:bg-red-800 hover:text-white">Delete Resume</button>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default LoadResume;
