import axios from 'axios';
import * as actionType from './constants';
import store from '../store';


// console.log(store.getState().hoaxCheckerReducer.tbh)

export const addUserInputSuccess = result => ({
  type: actionType.ADD_USER_INPUT_SUCCESS,
  payload: result,
})

export const addUserInput = (userInput) => {

  const input = { input: userInput }
  return (dispatch) => {
    axios.post('http://localhost:3002/api/check', input)
      .then(res => {
        console.log('dari adduserinput action', res.data)
        dispatch(addUserInputSuccess(res.data))
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const upvoteNewsSuccess = result => ({
  type: actionType.UPVOTE_NEWS_SUCCESS,
  payload: result,
})

export const downvoteNewsSuccess = result => ({
  type: actionType.DOWNVOTE_NEWS_SUCCESS,
  payload: result,
})

export const getFactCount = (data, idx) => {
  let newData = store.getState().hoaxCheckerReducer.tbh;
  console.log('dari hoax checker action', newData)
  console.log('IDX', idx)
  newData.sources[idx].feedback = data
  return (dispatch) => {
      dispatch(upvoteNewsSuccess(newData, idx))
  }
}

export const getHoaxCount = (data, idx) => {
  let newData = store.getState().hoaxCheckerReducer.tbh;
  newData.sources[idx].feedback = data
  console.log('dari get hoax count action', newData)
  return (dispatch) => {
      dispatch(downvoteNewsSuccess(newData, idx))
  }
}

export const upvoteNews = (data, idx) => {
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
      if (res.data.success) {
        console.log('masuk dispatch upvote news feedback action')
        console.log('RES DATA UPVOTE', res.data)
        dispatch(getFactCount(res.data.feedback, idx))
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

export const downvoteNews = (data, idx) => {
  const newsData = {
    userId: data.userId,
    value: data.value,
    name: data.name,
    description: data.description,
    url: data.url,
  }
  return (dispatch) => {
    console.log('sebelum axios downvote news action')
    axios.post('http://localhost:3002/api/source/feedback', newsData)
    .then((res) => {
      console.log('RES DOWNVOTE', res.data)
      if (res.data.success) {
        console.log('RES DATA DOWNVOTE', res.data)
        dispatch(getHoaxCount(res.data.feedback, idx))
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }
}