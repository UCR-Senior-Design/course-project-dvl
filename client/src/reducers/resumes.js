import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes';

export default (resumes = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...resumes, action.payload];
    case UPDATE:
      return resumes.map((resume) => (resume._id === action.payload._id ? action.payload : resume));
    case DELETE:
      return resumes.filter((resume) => resume._id !== action.payload);
    default:
      return resumes;
  }
};
