import axios from 'axios';
import * as actionType from './constants';

export const addUserInputSuccess = result => ({
  type: actionType.ADD_USER_INPUT_SUCCESS,
  payload: result,
})

export const addUserInput = (userInput) => {

  const input = { input: userInput }
  return (dispatch) => {
    axios.post('http://localhost:3002/api/check', input)
      .then(res => {
        dispatch(addUserInputSuccess(res.data))
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const addNewsSearchSuccess = result => ({
  type: actionType.ADD_NEWS_SEARCH_SUCCESS,
  payload: result,
})

export const addNewsSearch = (userInput) => {
  const input = { word: userInput }
  return (dispatch) => {
    axios.post('http://localhost:3002/api/source/news', input)
      .then(res => dispatch(addUserInputSuccess(res.data.record)))
  }
};
