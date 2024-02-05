import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3500' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchResumes = () => API.get('/resumes');
export const createResume = (newResume) => API.post('/resumes', newResume);
export const updateResume = (id, updatedResume) => API.patch(`/resumes/${id}`, updatedResume);
export const deleteResume = (id) => API.delete(`/resumes/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
