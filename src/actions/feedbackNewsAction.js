import axios from 'axios';
import * as actionType from './constants';

export const upvoteNewsSuccess = result => ({
  type: actionType.UPVOTE_NEWS_SUCCESS,
  payload: result,
})

export const downvoteNewsSuccess = result => ({
  type: actionType.DOWNVOTE_NEWS_SUCCESS,
  payload: result,
})

export const upvoteNews = (data) => {
  const newsData = {
    userId: data.userId,
    value: data.value,
    name: data.name,
    description: data.description,
    url: data.url,
  }
  return (dispatch) => {
    axios.post('http://localhost:3002/api/source/feedback', newsData)
    .then((res) => {
      dispatch(upvoteNewsSuccess(res.data.feedback))
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

export const downvoteNews = (data) => {
  const newsData = {
    userId: data.userId,
    value: data.value,
    name: data.name,
    description: data.description,
    url: data.url,
  }
  return (dispatch) => {
    axios.post('http://localhost:3002/api/source/feedback', newsData)
    .then((res) => {
      dispatch(downvoteNewsSuccess(res.data.feedback))
    })
    .catch((err) => {
      console.log(err)
    })
  }
}
