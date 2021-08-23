import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';

import './Navbar.css'
//import Button from './Button';
//import DropDown from './Dropdown.js';


function Navbar() {

    const [click,setClick] = useState(false);
    
    const handleClick = () => setClick(!click); 

    return (
        <div>
            <nav className='navbar'>
                <NavLink to='/' className='navbar-logo'>What Is That?</NavLink>
            </nav>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : ' fas fa-bars'}></i>
            </div>
        </div>
    )
}

export default Navbar
