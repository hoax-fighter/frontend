import axios from 'axios'
import * as actionType from './constants'
import * as url from '../constants';

export const getHoaxListSuccess = (data) => ({
    type: actionType.GET_HOAX_SUCCESS,
    payload: data
})

export const getHoaxList = () => {
    return dispatch => {
        axios.get(`${url}api/post`)
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
        axios.post(`${url}api/post`, {
            user,
            title,
            content
        })
            .then(response => {
                axios.get(`${url}api/post/${response.data.post._id}`)
                    .then(res => {
                        return dispatch({
                            type: actionType.INSERT_HOAX_SUCCESS,
                            payload: res.data.post
                        })
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const deleteHoax = (id) => {
    return dispatch => {
        axios.delete(`${url}api/post/${id}`)
            .then(response => {
                return dispatch({
                    type: actionType.DELETE_HOAX,
                    payload: id
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const getDataHoax = (id) => {
    return dispatch => {
        axios.get(`${url}api/post/${id}`)
            .then(response => {
                // console.log(response.data.post)
                return dispatch({
                    type: actionType.GET_DATA_HOAX,
                    payload: response.data.post
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const editHoax = ({ user, title, content, postId }) => {
    return dispatch => {
        axios.put(`${url}api/post/${postId}`, {
            title,
            content
        })
            .then(response => {
                axios.get(`${url}api/post/${postId}`)
                    .then(result => {
                        // console.log(response.data.post)
                        return dispatch({
                            type: actionType.EDIT_HOAX,
                            payload: result.data.post
                        })
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const addVoteHoax = ({ userId, postId }) => {
    return dispatch => {
        axios.post(`${url}api/post/hoax/${postId}`, {
            userId,
            value: 1
        })
            .then(response => {
                // console.log('res', response.data)
                if (response.data.success) {
                    // alert('Vote Hoax Success')
                    return dispatch({
                        type: actionType.GET_DATA_HOAX,
                        payload: response.data.post
                    })
                } else {
                    alert(response.data.error)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const addVoteNonHoax = ({ userId, postId }) => {
    return dispatch => {
        axios.post(`${url}api/post/hoax/${postId}`, {
            userId,
            value: -1
        })
            .then(response => {
                // console.log('res', response.data)
                if (response.data.success) {
                    // alert('Vote Fact Success')
                    return dispatch({
                        type: actionType.GET_DATA_HOAX,
                        payload: response.data.post
                    })
                } else {
                    alert(response.data.error)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
}