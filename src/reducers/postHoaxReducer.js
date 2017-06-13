import * as actionType from '../actions/constants'

let initalState = {
    hoaxList: [],
    loadingGetHoaxList: false,
    message: ''
}

const getHoaxSuccess = (state, data) => {
    let newState = {
        ...state,
        hoaxList: data,
        loadingGetHoaxList: false
    }

    return newState
}

const insertHoaxSuccess = (state, data) => {
    let newState = {
        ...state,
        hoaxList: [...state.hoaxList, data],
        message: 'Post Hoax Is Successfully Inserted'
    }

    return newState
}

const deleteHoax = (state, id) => {
    let newData = state.hoaxList.filter(data => data._id !== id)

    let newState = {
        ...state,
        hoaxList: newData,
        message: 'Post Hoax Is Successfully Deleted'
    }

    return newState
}

const postHoaxReducer = (state = initalState, { type, payload }) => {
    switch (type) {
        case actionType.GET_HOAX_SUCCESS:
            return getHoaxSuccess(state, payload)
        case actionType.INSERT_HOAX_SUCCESS:
            return insertHoaxSuccess(state, payload)
        case actionType.DELETE_HOAX:
            return deleteHoax(state, payload)
        default:
            return state
    }
}

export default postHoaxReducer