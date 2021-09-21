import React, { useState, useRef, useCallback } from "react";
import './Registration.css';
import RegistrationForm from "../../Components/RegistrationForm/RegistrationForm";


function Registration() {
    // This will need to be set after confirm from  the API the form went though 
    const [isSubmitted, setIsSubmitted] = useState(false)

    const submitedForm = useCallback(() => {
        setIsSubmitted(true)
    }, [setIsSubmitted])

    //This will pass up from the competent the is submitted I'll add a loader later. 
    function submitForm() {
        setIsSubmitted(true);
    }


    return (
        <div>
            <RegistrationForm submitForm={submitForm} />
        </div>
    )
}

export default Registration
