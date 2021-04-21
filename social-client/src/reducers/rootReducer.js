import { combineReducers } from 'redux';
import postReducer from './postReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  currentUser: userReducer,
  loading: loadingReducer
});

export default rootReducer;

function loadingReducer(state = true, action) {
  switch (action.type) {
    case 'LOADING':
      return state = true
    case "NOT_LOADING":
      return state = false
    default:
      return state;
  }
}