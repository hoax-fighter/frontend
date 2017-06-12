import axios from 'axios'
import * as actionType from './constants'

export const getHoaxListSuccess = (data) => ({
    type: actionType.GET_HOAX_SUCCESS,
    payload: data
})

export const getHoaxList = () => {
    return dispatch => {
        axios.get(`http://localhost:3002/api/post`)
            .then(response => {
                dispatch(getHoaxListSuccess(response.data.posts))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const insertHoax = ({ user, title, content }) => {
    return dispatch => {
        axios.post(`http://localhost:3002/api/post`, {
            user,
            title,
            content
        })
            .then(response => {
                alert(response)
                console.log('response', response)
            })
            .catch(error => {
                console.log(error)
            })
    }
}