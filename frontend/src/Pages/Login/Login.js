import React, { useState, useRef } from "react";
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    }

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    }

    // This will handle the loading and the validate when i figure it out. 
    const hangleLogin = (e) => {
        e.preventDefault();
    }

    return (
        <div className={styles.container} >
            <div className={styles.formContainer}>

                <img src="../../../public/Logo.png" alt='What-is-that-logo' className='login-logo' />

                <h1>Login Page</h1>

                <form>
                    <div className={styles.loginForm}>
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
                    <button>login</button>

                    <div>
                        <Link to="/Registration">Need to Register instead?</Link>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Login
