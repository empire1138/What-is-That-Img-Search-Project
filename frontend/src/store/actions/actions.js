import * as ACTION_TYPES from './action_types'

// Generic actions.types
export const SUCCESS = {
    type: ACTION_TYPES.SUCCESS
}

export const FAILURE = {
    type: ACTION_TYPES.FAILURE
}


export const success = () => {
    return {
        type: ACTION_TYPES.SUCCESS
    }
}

export const failure = () => {
    return {
        type: ACTION_TYPES.FAILURE
    }
}

// Login Actions.types

export const login_success = (userLogin) => {
    return {
        type: ACTION_TYPES.LOGIN_SUCCESS,
        payload: userLogin
    }
}

export const login_failure = () => {
    return {
        type: ACTION_TYPES.LOGIN_FAILURE
    }
}

export const login_request = () =>{
    return {
        type: ACTION_TYPES.LOGIN_REQUEST
    }
}

// User Actions.types
export const add_profile = (profile) => {
    return {
        type: ACTION_TYPES.ADD_PROFILE,
        payload: profile
    }
}

export const remove_profile = () => {
    return {
        type: ACTION_TYPES.REMOVE_PROFILE
    }
}

export const user_input_change = (text) => {
    return {
        type: ACTION_TYPES.USER_INPUT_CHANGE,
        payload: text
    }
}

export const user_input_submit = (text) => {
    return {
        type: ACTION_TYPES.USER_INPUT_SUBMIT,
        payload: text
    }
}

// Register actions.types
export const register_success = (userInfo) => {
    return {
        type: ACTION_TYPES.REGISTER_SUCCESS,
        payload: userInfo
    }
}

export const register_fail = (errorMessage) => {
        return{
            type: ACTION_TYPES.REGISTER_FAIL,
            payload:errorMessage
        }
}

export const register_request = () => {
    return {
        type: ACTION_TYPES.REGISTER_REQUEST
    }
}
// message action.types
export const set_message = (message) => {
    return{
        type: ACTION_TYPES.SET_MESSAGE,
        payload: message
    }
}

export const clear_message = () => {
    return{
        type: ACTION_TYPES.CLEAR_MESSAGE
    }
}