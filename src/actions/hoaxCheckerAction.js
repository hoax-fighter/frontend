import axios from 'axios';
import * as actionType from './constants';

export const addUserInputSuccess = result => ({
  type: actionType.ADD_USER_INPUT_SUCCESS,
  payload: result,
})

export const addUserInput = (userInput) => {
  const input = { input: userInput }
  // console.log(input)
  return (dispatch) => {
    axios.post('http://localhost:3000/api/check', input)
    .then(res => dispatch(addUserInputSuccess(res.data.tbh)))
  }
}

export const addNewsSearchSuccess = result => ({
  type: actionType.ADD_NEWS_SEARCH_SUCCESS,
  payload: result,
})

export const addNewsSearch = (userInput) => {
  const input = { word: userInput }
  return (dispatch) => {
    axios.post('http://localhost:3000/api/source/news', input)
    .then(res => dispatch(addUserInputSuccess(res.data.record)))
  }
};
