import React, { useReducer } from "react";
import Context from "./utils/Context/context";
import * as ACTIONS from './store/actions/actions'

//These will need to be changed as the state and reducer needs change 
import * as ReducerOne from './store/reducers/plain_reducer';
import * as AuthReducer from './store/reducers/auth_reducer';
import * as FormReducer from './store/reducers/useForm_reducer';
import * as RegisterReducer from './store/reducers/register_reducer';
import Routes from ''
import Auth from './utils/auth';

const auth = new Auth()

// This will change as well. Really its a placeHolder till I work out all of the context needs. 
const ContextState = () => {



    //Register Reducer
    const [stateRegReducer, dispatchRegReducer] = useReducer(RegisterReducer.RegisterReducer, RegisterReducer.initialState);

    const handleRegister = (event) => {
        dispatchRegReducer(ACTIONS.REGISTER_SUCCESS(event))
    }

    //Auth Reducer I think this will work need to change maybe

    const [stateAuthReducer, dispatchAuthReducer] = useReducer(AuthReducer.AuthReducer,
        AuthReducer.initialState)



    const handleLogin = (event) => {
        event.preventDefault();
        event.persist();
        dispatchAuthReducer(ACTIONS.login_success(event.target.userLogin.value))
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

                    //Reg Reducer
                    userRegState: stateRegReducer.userReg,
                    handleUserReg:(event) => handleRegister(event),

                    //Auth Reducer
                    authState: stateAuthReducer.is_authenticated,
                    profileState: stateAuthReducer.profile,
                    handleUserLogin: (event) => handleLogin(event),
                    handleUserLogout: () => handleLogout(),
                    handleUserAddProfile: (profile) => handleAddProfile(profile),
                    handleUserRemoveProfile: () => handleRemoveProfile(),

                    //Handle auth
                    handleAuth: (props) => handleAuthentication(props),
                    authObj: auth
                }}
            >
                <Routes />
            </Context.Provider>
        </div>
    )

}

export default ContextState; 