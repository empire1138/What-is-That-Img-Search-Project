import React from 'react';
import styles from './Login.module.css';
import {Link} from 'react-router-dom';

function Login() {
    return (
        <div className = { styles.container } >
            <div className={styles.formContainer}>
                <h1>Login Page</h1>

                <form>
                    <div className={styles.loginForm}>
                        <div className={styles.loginFormItem}>
                            <label htmlFor='email'>Username</label>
                            <input type='text' id='email' />
                        </div>
                        <div className={styles.loginFormItem}>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' />
                        </div>
                    </div>
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
