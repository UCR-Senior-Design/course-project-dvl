import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3500' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchResumes = () => API.get('/resumes');
export const fetchResumesByCreator = (creator) => API.get(`/resumes/${creator}`);
export const createResume = (newResume) => API.post('/resumes', newResume);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
