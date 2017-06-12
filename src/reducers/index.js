import { combineReducers } from 'redux';

import hoaxCheckerReducer from './hoaxCheckerReducer';
import authReducer from './authReducer';
import postHoaxReducer from './postHoaxReducer'

const rootReducer = combineReducers({
  hoaxCheckerReducer,
  authReducer,
  postHoaxReducer
});

export default rootReducer;
