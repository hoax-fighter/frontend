import * as actionType from '../actions/constants'

let initialState = {
    registerMessage: '',
    signInMessage: '',
}

const signInSuccess = state => {
    let newState = {
        ...state,
        signInMessage: 'Sign In Success',
    }

    return newState
}

const signInFailed = (state, payload) => {
    let newState = {
        ...state,
        signInMessage: payload
    }

    return newState
}

const signOutSuccess = (state) => {
    let newState = {
        ...state,
        ...initialState
    }

    return newState
}

const registerSuccess = state => {
    let newState = {
        ...state,
        registerMessage: 'Register Success'
    }
    return newState
}

const registerFailed = (state, message) => {
    let newState = {
        ...state,
        registerMessage: message
    }

    return newState
}

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionType.SIGNIN_SUCCESS:
            return signInSuccess(state)
        case actionType.SIGNIN_FAILED:
            return signInFailed(state, payload)
        case actionType.SIGNOUT_SUCCESS:
            return signOutSuccess(state)
        case actionType.REGISTER_SUCCESS:
            return registerSuccess(state)
        case actionType.REGISTER_FAILED:
            return registerFailed(state, payload)
        default:
            return state
    }
}

export default authReducer
