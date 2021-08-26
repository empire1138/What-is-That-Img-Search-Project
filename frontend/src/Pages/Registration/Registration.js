import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import './Registration.css';


function Registration() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeFirstName = (e) => {
        const username = e.target.value;
        setFirstName(username);
    };

    const onChangeLastName = (e) => {
        const username = e.target.value;
        setLastName(username);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleRegister = (e) => {
        e.preventDefault();

    }

    return (
        <div className='form-container'>
            <form className='form form-content-right'>
                <h1>
                    Get started with us today! Create your account by filling out the
                    information below.
                </h1>
                <div className='form-inputs'>
                    <label htmlFor="firstName" className='form-label'>First Name</label>
                    <input
                        type="text"
                        name="fistName"
                        value={firstName}
                        className='form-input'
                        onChange={onChangeFirstName}
                    // validations
                    />
                </div>
                <div className='form-inputs'>
                    <label htmlFor="LastName" className='form-label'>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        className='form-input'
                        onChange={onChangeLastName}
                    // validations
                    />
                </div>
                <div className='form-inputs'>
                    <label htmlFor="email" className='form-label'>Email</label>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        className='form-input'
                        onChange={onChangeEmail}
                    // validations
                    />
                </div>
                <div className='form-inputs'>
                    <label htmlFor="password" className='form-label'>Password</label>
                    <input
                        type="text"
                        name="lastName"
                        value={password}
                        className='form-input'
                        onChange={onChangePassword}
                    // validations
                    />
                </div>
                <button className='form-input-btn' type='submit'>
                    Sign up
                </button>
                <div className='form-input-login'>
                    <Link to="/" > Already have an account? Login here </Link>
                </div>
            </form>
        </div>
    )
}

export default Registration
