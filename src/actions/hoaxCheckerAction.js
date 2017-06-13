import axios from 'axios';
import * as actionType from './constants';

export const addUserInputSuccess = result => ({
  type: actionType.ADD_USER_INPUT_SUCCESS,
  payload: result,
})

export const addUserInputStart = () => ({
  type: actionType.ADD_USER_INPUT_START,
})

export const addUserInput = (userInput) => {

  const input = { input: userInput }
  return (dispatch) => {
    dispatch(addUserInputStart())
    axios.post('http://localhost:3002/api/check', input)
      .then(res => {
        dispatch(addUserInputSuccess(res.data))
      })
      .catch(error => {
        console.log(error)
      })
  }
}
