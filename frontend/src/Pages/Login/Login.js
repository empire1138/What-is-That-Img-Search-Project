import React, { useState, useRef, useReducer, useContext } from "react";
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import Context from "../../utils/Context/context";
import history from "../../utils/history";

import * as authReducer from '../../store/reducers/auth_reducer';

function loginReducer(state, action) {
    switch (action.type) {
        case 'login': {
            return {
                ...state,
                isLoading: true,
                error: '',
            };
        }
        case 'success': {
            return {
                ...state,
                isLoggedIn: true,
            }
        }
        case 'error': {
            return {
                ...state,
                error: 'Incorrect username or password',
                isLoading: false,
                email: '',
                password: '',
            }
        }
        default:
            break;
    }


    return state;
}
const initialState = {
    email: '',
    password: '',
    isLoading: false,
    error: '',
    isLoggedIn: false,
}

function Login(props) {

    const [state, dispatch] = useReducer(loginReducer, initialState);
    const [authState, authDispatch] = useReducer(authReducer.AuthReducer, authReducer.initialState); 

    const context = useContext(Context)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    }

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    }

    // This will handle the loading and the validate when i figure it out. 
    const handleLogin = async e => {
        e.preventDefault();
        let payload = {email, password}
        console.log(payload, ' payload' )
        context.handleUserLogin(payload)
        context.authObj.login(payload); 
        dispatch({ type: ' login' }) // After this should be the function to pass in login then afterwards reset the setLoading 
        try {
            dispatch({ type: 'success' })
        } catch (error) {
            dispatch({ type: 'error' })
            console.log(error, 'Login Error')
        }
        console.log(context.authObj.isAuthenticated(), 'authObj isAuth')

        if(context.authObj.isAuthenticated()){
            setEmail('');
            setPassword('');
            // history.push('/SearchDashBoard')
    
        }
    }

    return (
        <div className={styles.pageContainer}>
            <div className={styles.container} >

                <div className={styles.logoContainer}>
                    <img src="../../../public/Logo.png" alt='What-is-that-logo' className='login-logo' />
                </div>
                <div className={styles.formContainer}>

                    <h1>Login Page</h1>

                    <form onSubmit={handleLogin}>
                        <div className={styles.loginForm}>
                            {error && <p className='error'>{error}</p>}
                            <div className={styles.loginFormItem}>
                                <label htmlFor='email'>Email</label>
                                <input
                                    type='text'
                                    id='email'
                                    name='email'
                                    value={email}
                                    onChange={onChangeEmail}
                                // validations will go here at some point
                                />
                            </div>
                            <div className={styles.loginFormItem}>
                                <label htmlFor='password'>Password</label>
                                <input
                                    type='password'
                                    id='password'
                                    name='password'
                                    value={password}
                                    onChange={onChangePassword}
                                // // validations will go here at some point
                                />
                            </div>

                        </div>
                        {/* //{This Button will need the loader at it at some point} */}
                        <button className='submit' type='submit' disabled={loading}>
                            {loading ? ' Logging in...' : 'Login '}
                        </button>

                        <div>
                            <Link to="/auth/registration">Need to Register instead?</Link>
                        </div>
                    </form>
                </div>
            </div >
        </div>

    )
}

export default Login
