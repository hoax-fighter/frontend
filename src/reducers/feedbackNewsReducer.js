import * as actionType from '../actions/constants';

let initialState = {
  feedbacks: '',
}

const upvoteNews = (state, data) => {
  const newState = { ...state, feedback: data }
  return newState
}

const downvoteNews = (state, data) => {
  const newState = { ...state, feedback: data }
  return newState
}

const feedbackNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.UPVOTE_NEWS_SUCCESS:
      return upvoteNews(state, action.payload);
    case actionType.DOWNVOTE_NEWS_SUCCESS:
      return downvoteNews(state, action.payload);
    default:
      return state;
  }
};

export default feedbackNewsReducer;
