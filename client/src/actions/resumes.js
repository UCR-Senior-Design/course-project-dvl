import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getResumes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchResumes();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createResume = (resume) => async (dispatch) => {
  try {
    const { data } = await api.createResume(resume);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateResume = (id, resume) => async (dispatch) => {
  try {
    const { data } = await api.updateResume(id, resume);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const likeResume = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('profile'));

  try {
    const { data } = await api.likeResume(id, user?.token);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteResume = (id) => async (dispatch) => {
  try {
    await api.deleteResume(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};