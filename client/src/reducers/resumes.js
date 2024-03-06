import { FETCH_ALL, CREATE, DELETE} from '../constants/actionTypes';

export default (resumes = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...resumes, action.payload];
    case DELETE:
      return resumes.filter((resume) => resume._id !== action.payload);
    default:
      return resumes;
  }
};
