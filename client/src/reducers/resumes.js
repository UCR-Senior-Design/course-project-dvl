import { FETCH_ALL, CREATE} from '../constants/actionTypes';

export default (resumes = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...resumes, action.payload];
    default:
      return resumes;
  }
};
