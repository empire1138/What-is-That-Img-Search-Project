import * as ACTION_TYPES from '../actions/actions_types';

const initialState = {
    message: null
};

export const Message = (state = initialState, action) => {

  switch (action.types) {
    case ACTION_TYPES.SET_MESSAGE:
      return { message: action.payload};

    case ACTION_TYPES.CLEAR_MESSAGE:
      return { message: "" };

    default:
      return state;
  }
}