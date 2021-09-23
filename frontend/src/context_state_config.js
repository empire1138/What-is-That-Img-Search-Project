import React, { useReducer } from "react";
import Context from "./utils/Context/context";
import * as ACTIONS from './store/actions/actions'

//These will need to be changed as the state and reducer needs change 
import * as AuthReducer from './store/reducers/auth_reducer';
import * as RegisterReducer from './store/reducers/register_reducer';
import Routes from './Routes'
import Auth from './utils/auth';

const auth = new Auth()

// This will change as well. Really its a placeHolder till I work out all of the context needs. 
const ContextState = () => {



    //Register Reducer
    const [stateRegReducer, dispatchRegReducer] = useReducer(RegisterReducer.RegisterReducer, RegisterReducer.initialState);

    const handleRegister = (event) => {
        dispatchRegReducer(ACTIONS.register_success(event))
    }

    //Auth Reducer I think this will work need to change maybe

    const [stateAuthReducer, dispatchAuthReducer] = useReducer(AuthReducer.AuthReducer,
        AuthReducer.initialState)



    const handleLogin = (payload) => {
        // event.preventDefault();
        // event.persist();
        console.log(payload, 'payload2')
        dispatchAuthReducer(ACTIONS.login_success(payload))
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
                    handleUserLogin: (payload) => handleLogin(payload),
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