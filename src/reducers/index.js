import { combineReducers } from 'redux';

import hoaxCheckerReducer from './hoaxCheckerReducer';
import authReducer from './authReducer';
import feedbackNewsReducer from './feedbackNewsReducer';

const rootReducer = combineReducers({
  hoaxCheckerReducer,
  authReducer,
  feedbackNewsReducer,
});

export default rootReducer;
