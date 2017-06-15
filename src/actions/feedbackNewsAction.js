// import axios from 'axios';
import * as actionType from './constants';
// import { getFactCount, getHoaxCount } from './hoaxCheckerAction';

export const upvoteNewsSuccess = result => ({
  type: actionType.UPVOTE_NEWS_SUCCESS,
  payload: result,
})

export const downvoteNewsSuccess = result => ({
  type: actionType.DOWNVOTE_NEWS_SUCCESS,
  payload: result,
})



// export const getFactCount = () => {
//  return (dispatch) => {
//    ax
//  }
// }
