import { NavLink } from 'react-router-dom'
import './Button.css'

import React from 'react'

function Button() {
    return (
        <div>
            <NavLink to='registration'>
                <button className='btn'>Logout</button>
            </NavLink>
        </div>
    )
}

export default Button

