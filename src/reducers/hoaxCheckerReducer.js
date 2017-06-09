import * as actionType from '../actions/constants';

// yang terjadi ketika user submit ke form adalah:
// 1. akan terjadi req axios POST ke db
// 2. lalu keluarkan returnnya

let initialState = {
  newsList: '',
  tbh: '',
};

const addNewsSearch = (state, data) => {
  const newState = { ...state, newsList: data };
  return newState;
}

const addUserInput = (state, data) => {
  const newState = { ...state, tbh: data };
  // console.log(data)
  return newState;
}

const hoaxCheckerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_USER_INPUT_SUCCESS: return addUserInput(state, action.payload);
    case actionType.ADD_NEWS_SEARCH_SUCCESS: return addNewsSearch(state, action.payload);
    default: return state;
  }
}

export default hoaxCheckerReducer;
