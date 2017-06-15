import * as actionType from './constants';

export const upvoteNewsSuccess = result => ({
  type: actionType.UPVOTE_NEWS_SUCCESS,
  payload: result,
})

export const downvoteNewsSuccess = result => ({
  type: actionType.DOWNVOTE_NEWS_SUCCESS,
  payload: result,
})
