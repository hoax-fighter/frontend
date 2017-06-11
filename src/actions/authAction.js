import firebase from 'firebase'
import axios from 'axios'
import * as actionType from './constants'


export const signInUserSuccess = () => ({
    type: actionType.SIGNIN_SUCCESS
})

export const signInUserFailed = (message) => ({
    type: actionType.SIGNIN_FAILED,
    payload: message
})

export const signInUser = ({ email, password }) => {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                localStorage.setItem('token', user.ie)
                dispatch(signInUserSuccess())
            })
            .catch(error => {
                // console.log(error)
                var message = ''
                if (error.code === 'auth/wrong-password') {
                    message = 'Password is Invalid'
                } else if (error.code === 'auth/user-not-found') {
                    message = 'Email is Invalid'
                }
                dispatch(signInUserFailed(message))
            })
    }
}

export const signOutUser = () => {
    return dispatch => {
        firebase.auth().signOut()
            .then(() => {
                localStorage.clear()
                dispatch(signOutUserSuccess())
            })
    }
}

export const signOutUserSuccess = () => ({
    type: actionType.SIGNOUT_SUCCESS
})

export const registerUser = ({ name, email, password }) => {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                const { email, ie } = user
                axios.post(`http://localhost:3002/api/board/users`, {
                    uid: ie,
                    name,
                    email
                })
                    .then(response => {
                        dispatch(registerUserSuccess())
                    })
            })
            .catch(error => {
                var message = ''
                if (error.code === 'auth/email-already-in-use') {
                    message = 'Email address is already in use'
                } else if (error.code === 'auth/weak-password') {
                    message = 'Password should be at least 6 characters'
                }
                dispatch(registerUserFailed(message))
            })
    }
}

export const registerUserSuccess = () => ({
    type: actionType.REGISTER_SUCCESS
})

export const registerUserFailed = message => ({
    type: actionType.REGISTER_FAILED,
    payload: message
})