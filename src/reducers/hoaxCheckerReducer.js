import * as actionType from '../actions/constants';

// yang terjadi ketika user submit ke form adalah:
// 1. akan terjadi req axios POST ke db
// 2. lalu keluarkan returnnya

let initialState = {
  newsList: '',
  tbh: '',
  loading : false
};

const addNewsSearch = (state, data) => {
  const newState = { ...state, newsList: data };
  return newState;
}

const addUserInput = (state, data) => {
  const newState = { ...state, tbh: data, loading: false };
  // console.log('reducer', data)
  return newState;
}

const addNewsSearchStart = state => {
  const newState = {
    ...state,
    loading: true
  }

  return newState
}

const hoaxCheckerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_USER_INPUT_SUCCESS:
      return addUserInput(state, action.payload);
    case actionType.ADD_NEWS_SEARCH_SUCCESS:
      return addNewsSearch(state, action.payload);
    case actionType.ADD_NEWS_SEARCH_START:
      return addNewsSearchStart(state)
    default:
      return state;
  }
}

export default hoaxCheckerReducer;
