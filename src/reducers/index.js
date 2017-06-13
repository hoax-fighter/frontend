import { combineReducers } from 'redux';

import hoaxCheckerReducer from './hoaxCheckerReducer';
import authReducer from './authReducer';

import postHoaxReducer from './postHoaxReducer'

import feedbackNewsReducer from './feedbackNewsReducer';

const rootReducer = combineReducers({
  hoaxCheckerReducer,
  authReducer,
  postHoaxReducer,
  feedbackNewsReducer,
});

export default rootReducer;
