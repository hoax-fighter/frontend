import * as actionType from '../actions/constants'

let initalState = {
    hoaxList: '',
    loadingGetHoaxList: false,
}

const getHoaxSuccess = (state, payload) => {
    let newState = {
        ...state,
        hoaxList: payload,
        loadingGetHoaxList: false
    }

    return newState
}

const postHoaxReducer = (state = initalState, { type, payload }) => {
    switch (type) {
        case actionType.GET_HOAX_SUCCESS:
            return getHoaxSuccess(state, payload)
        default:
            return state
    }
}

export default postHoaxReducer