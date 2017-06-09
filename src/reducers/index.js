import { combineReducers } from 'redux';

import hoaxCheckerReducer from './hoaxCheckerReducer';

const rootReducer = combineReducers({
  hoaxChecker: hoaxCheckerReducer,
});

export default rootReducer;
