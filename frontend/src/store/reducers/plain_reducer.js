import * as ACTION_TYPES from '../actions/actions_types';

export const initialState = {
    stateProp1: false, 
    stateProp2: false
}

export const plainReducer = (state, action ) => {
    switch( action.types) {
        case ACTION_TYPES.SUCCESS : 
        return {
            ...state,
            stateProp1: true, 
            stateProp2: true 
        }
        case ACTION_TYPES.FAILURE : 
        return {
            ...state,
            stateProp1: false, 
            stateProp2: false
        }
        default: throw new Error(); 
    }
}