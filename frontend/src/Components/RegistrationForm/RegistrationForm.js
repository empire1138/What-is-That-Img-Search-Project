import React, { useState, useRef } from "react";
import useForm from "../../Hooks/useForm";
import validate from "../../Validation/validateInfo";
import { Link } from 'react-router-dom';
import './RegistrationForm.css.css';

function RegistrationForm({submitForm}) {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
      );

    
    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit} className='form form-content-right'>
                <h1>
                    Get started with us today! Create your account by filling out the
                    information below.
                </h1>
                <div className='form-inputs'>
                    <label htmlFor="firstName" className='form-label'>First Name</label>
                    <input
                        type="text"
                        name="fistName"
                        className='form-input'
                        value={values.firstName}
                        onChange={handleChange}
                    // validations
                    />
                    {errors.firstName && <p>{errors.firstName}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor="LastName" className='form-label'>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        className='form-input'
                        value={values.lastName}
                        onChange={handleChange}
                    // validations
                    />
                    {errors.lastName && <p>{errors.lastName}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor="email" className='form-label'>Email</label>
                    <input
                        type="email"
                        name="email"
                        className='form-input'
                        value={values.email}
                        onChange={handleChange}
                    // validations
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor="password" className='form-label'>Password</label>
                    <input
                        type="password"
                        name="password"
                        className='form-input'
                        value={values.password}
                        onChange={handleChange}
                    // validations
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor="password2" className='form-label'>Confirm Password</label>
                    <input
                        type="password"
                        name="password2"
                        className='form-input'
                        value={values.password2}
                        onChange={handleChange}
                    // validations
                    />
                    {errors.password && <p>{errors.password2}</p>}
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

export default RegistrationForm
