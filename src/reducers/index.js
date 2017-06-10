import { combineReducers } from 'redux';

import hoaxCheckerReducer from './hoaxCheckerReducer';

const rootReducer = combineReducers({
  hoaxCheckerReducer: hoaxCheckerReducer,
});

export default rootReducer;
