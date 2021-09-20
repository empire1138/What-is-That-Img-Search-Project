import * as ACTION_TYPES from '../actions/actions_types';

export const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
    isSubmitRegistration: false,
    error: '',
    message: ''
}

export const RegisterReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}