import { combineReducers } from 'redux';

import resumes from './resumes';
import auth from './auth';

export const reducers = combineReducers({ resumes, auth });