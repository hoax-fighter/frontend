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
        dispatch(signInLoading())
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                localStorage.setItem('token', user.ie)
                dispatch(signInUserSuccess())
                axios.get(`http://localhost:3002/api/board/users/find/${user.email}`)
                    .then(response => {
                        dispatch(saveUserData(response.data.users._id))
                        alert('Sign In Success')
                    })
                    .catch(error => {
                        console.log(error)
                    })
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
                alert(message)
            })
    }
}

export const signOutUser = () => {
    return dispatch => {
        firebase.auth().signOut()
            .then(() => {
                localStorage.clear()
                dispatch(signOutUserSuccess())
                alert('Sign Out Success')
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
                const { email } = user
                axios.post(`http://localhost:3002/api/board/users`, {
                    name,
                    email
                })
                    .then(response => {
                        dispatch(registerUserSuccess())
                        alert('Register Success')
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
                alert(message)
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

export const signInLoading = () => ({
    type: actionType.SIGNIN_LOADING,
})

export const saveUserData = (id) => ({
    type: actionType.SAVE_USER_DATA,
    payload: id
})