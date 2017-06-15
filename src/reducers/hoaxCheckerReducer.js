import * as actionType from '../actions/constants';

let initialState = {
  newsList: [],
  tbh: '',
  loading: false,
  test: '',
};

const addUserInput = (state, data) => {
  const newState = { ...state, tbh: data, loading: false };
  return newState;
}

const addUserInputStart = (state) => {
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
    case actionType.UPVOTE_NEWS_SUCCESS:
      const upvoteState = { ...state, tbh: action.payload, test: 'upvoted' };
      return upvoteState
    case actionType.DOWNVOTE_NEWS_SUCCESS:
      const downvoteState = { ...state, tbh: action.payload, test: 'downvoted' };
      return downvoteState
    case actionType.ADD_USER_INPUT_START:
      return addUserInputStart(state)
    default:
      return state;
  }
}

export default hoaxCheckerReducer;
