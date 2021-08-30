import React, { useState, useRef, useCallback } from "react";
import useForm from "../../Hooks/useForm";
import validate from "../../Validation/validateInfo";
import { Link } from 'react-router-dom';
import './Registration.css';
import RegistrationForm from "../../Components/RegistrationForm/RegistrationForm";


function Registration() {
    // This will need to be set after confirm from  the API the form went though 
    const [isSubmitted, setIsSubmitted] = useState(false)
    const submitForm = useCallback(() => {
        setIsSubmitted(true)
    }, [setIsSubmitted])

    return (
        <div>
            <RegistrationForm />
        </div>
    )
}

export default Registration
