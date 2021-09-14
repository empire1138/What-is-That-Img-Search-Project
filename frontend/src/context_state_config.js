import React, { useReducer } from "react";
import Context from "./utils/Context/context";
import * as ACTIONS from './store/actions/actions'

//These will need to be changed as the state and reducer needs change 
import * as ReducerOne from './store/reducers/plain_reducer';
import * as AuthReducer from './store/reducers/auth_reducer';
import * as FormReducer from './store/reducers/useForm_reducer'
import Auth from './utils/auth';

const auth = new Auth()

// This will change as well. Really its a placeHolder till I work out all of the context needs. 
const ContextState = () => {


    //Plain Reducer Following Template 
    const [stateReducerOne, dispatchReducerOne] = useReducer(ReducerOne.ReducerOne,
        ReducerOne.initialState)

    const handleDispatchTrue = () => {
        //    dispatchReducer1(type: "SUCCESS")
        //    dispatchReducer1(ACTIONS.SUCCESS)
        dispatchReducerOne(ACTIONS.success())
    }

    const handleDispatchFalse = () => {
        //     dispatchReducer1(type: "FAILURE")
        //    dispatchReducer1(ACTIONS.FAILURE)
        dispatchReducerOne(ACTIONS.failure())
    }

    //Auth Reducer I think this will work need to change maybe
   
    const [stateAuthReducer, dispatchAuthReducer] = useReducer(AuthReducer.AuthReducer,
        AuthReducer.initialState)


    const handleLogin = () => {
        dispatchAuthReducer(ACTIONS.login_success())
    }

    const handleLogout = () => {
        dispatchAuthReducer(ACTIONS.login_failure())
    }

    const handleAddProfile = (profile) => {
        dispatchAuthReducer(ACTIONS.add_profile(profile))
    }

    const handleRemoveProfile = () => {
        dispatchAuthReducer(ACTIONS.remove_profile())
    }

    //This will have to be changed no sure if the action payload will work with my hook.     
    const [stateFormReducer, dispatchFormReducer] = useReducer(FormReducer.FormReducer, FormReducer.initialState)


    const handleFormChange = (event) => {
      dispatchFormReducer(ACTIONS.user_input_change(event.target.value))
    };

    const handleFormSubmit = (event) => {
      event.preventDefault();
      event.persist();             dispatchFormReducer(ACTIONS.user_input_submit(event.target.useContext.value))
    };

    //Handle authentication from callback
    const handleAuthentication = (props) => {
      if(props.location.hash) {
        auth.handleAuth()
      }
    }
}