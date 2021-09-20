import React, { useReducer } from "react";
import Context from "./utils/Context/context";
import * as ACTIONS from './store/actions/actions'

//These will need to be changed as the state and reducer needs change 
import * as ReducerOne from './store/reducers/plain_reducer';
import * as AuthReducer from './store/reducers/auth_reducer';
import * as FormReducer from './store/reducers/useForm_reducer';
import Routes from ''
import Auth from './utils/auth';

const auth = new Auth()

// This will change as well. Really its a placeHolder till I work out all of the context needs. 
const ContextState = () => {

    
    //Auth Reducer I think this will work need to change maybe

    const [stateAuthReducer, dispatchAuthReducer] = useReducer(AuthReducer.AuthReducer,
        AuthReducer.initialState)
    
    const handleRegister = (userInfo) => {
        dispatchAuthReducer(ACTIONS.REGISTER_SUCCESS(userInfo))
    }    

    const handleRegisterFail = (errorMessage) =>{
        dispatchAuthReducer.apply(ACTIONS.REGISTER_FAIL(errorMessage))
    }

    const handleLogin = (userLogin) => {
        dispatchAuthReducer(ACTIONS.login_success(userLogin))
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
        event.persist(); dispatchFormReducer(ACTIONS.user_input_submit(event.target.useContext.value))
    };

    //Handle authentication from callback
    const handleAuthentication = (props) => {
        if (props.location.hash) {
            auth.handleAuth()
        }
    }

    return (
        <div>
            <Context.Provider
                value={{

                }}
            >
            <Routes/> 
            </Context.Provider>
        </div>
    )

}