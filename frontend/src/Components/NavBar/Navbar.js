import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';

import './Navbar.css'
import Button from './Button';
import DropDown from './DropDown';


function Navbar() {

    const [click, setClick] = useState(false);
    const [dropDown, setDropDown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropDown(false);
        } else {
            setDropDown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropDown(false);
        } else {
            setDropDown(false);
        }
    };

    return (
        <div>
            <nav className='navbar'>
                <NavLink to='/' className='navbar-logo'>What Is That?</NavLink>

                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : ' fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className=' nav-links' onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/userLogin' className=' nav-links' onClick={closeMobileMenu}>User Profile</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/UserUpload' className=' nav-links' onClick={closeMobileMenu}>Upload Images</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/registration' className=' nav-links-mobile' onClick={closeMobileMenu}>Logout</Link>
                    </li>
                </ul>
                <Button />
            </nav>
        </div>
    )
}

export default Navbar
