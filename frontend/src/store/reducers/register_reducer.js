import * as ACTION_TYPES from '../actions/actions_types';

export const initialState = {
    userReg: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
    },
    isSubmitRegistration: false,
    error: '',
    message: ''
}

export const RegisterReducer = (state , action) => {
    switch (action.type) {
        case ACTION_TYPES.REGISTER_REQUEST :
        return {
            ...state,
            isSubmitRegistration:true
        }
        default:
            return state
    }
}