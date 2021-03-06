import React, { useEffect, useContext } from 'react';
import history from './history';
import Context from './context';
import * as ACTIONS from '../store/actions/actions';

const AuthCheck = () => {
    const context = useContext(Context);

    useEffect(() => {
        if (context.authObj.isAuthenticated()) {
            context.handleUserLogin()
            context.handleUserAddProfile(context.authObj.userInfo)
            history.replace('/SearchDashBoard')
        }
        else {
            context.handleUserLogout()
            context.handleUserRemoveProfile()
            history.replace('/auth/login')
        }
    }, [context])
    return (
        <div>

        </div>
    )
}

export default AuthCheck; 