import * as actionType from '../actions/constants'

let initialState = {
    registerMessage: '',
    signInMessage: '',
    userData: '',
    loading: false,
    signOut: false
}

const signInSuccess = state => {
    let newState = {
        ...state,
        signInMessage: 'Sign In Success',
        signOut: false
    }

    return newState
}

const signInFailed = (state, payload) => {
    let newState = {
        ...state,
        signInMessage: payload,
        loading: false
    }

    return newState
}

const signOutSuccess = (state) => {
    let newState = {
        ...state,
        ...initialState,
        signInMessage: 'Sign Out Success',
        signOut: true
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

const saveUserData = (state, data) => {
    let newState = {
        ...state,
        userData: data,
        loading: false
    }

    return newState
}

const signInLoading = (state) => {
    let newState = {
        ...state,
        loading: true
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
        case actionType.SAVE_USER_DATA:
            return saveUserData(state, payload)
        case actionType.SIGNIN_LOADING:
            return signInLoading(state)
        default:
            return state
    }
}

export default authReducer
