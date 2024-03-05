import { FETCH_ALL, CREATE } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getResumes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchResumes();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getResumesByCreator = (creatorId) => async (dispatch) => {
  try {
    const { data } = await api.fetchResumesByCreator(creatorId);

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
