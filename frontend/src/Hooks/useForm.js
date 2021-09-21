import { useState, useEffect, useReducer, useContext } from 'react'
import * as RegisterReducer from '../store/reducers/register_reducer';
import Context from '../utils/Context/context';


const useForm = (callback, validate) => {

    const [state, dispatch] = useReducer(RegisterReducer.RegisterReducer, RegisterReducer.initialState);

    const context = useContext(Context)

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: ''
    })

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);

        //this should pass the validated values to the context file.  
        //context.handleUserReg(validate(values)); 
        context.authObj.register(validate(values))
    }

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                callback();
            }
        },
        [callback, errors, isSubmitting]
    );

    return { handleChange, values, handleSubmit, errors };
}

export default useForm;