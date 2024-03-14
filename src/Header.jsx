import React from 'react';
import './Header.css'

function Header() {
    return (
    <div className='header'>
        <h1>A²I</h1>
        <nav className='head-nav'>
            <ul className='ul1'>
                <li>Home</li>
                <li>Courses</li>
                <li>Reviews</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </div>
    )
}

export default Header;