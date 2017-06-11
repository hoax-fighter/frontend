import { combineReducers } from 'redux';

import hoaxCheckerReducer from './hoaxCheckerReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  hoaxCheckerReducer,
  authReducer,
});

export default rootReducer;
