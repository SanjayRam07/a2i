import React from 'react';
import './Header.css'

function Header() {
    return (
    <div className='header'>
        <div className='head'>
            <h1>A²Informatics</h1>
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
        <div className="body">
            <div className="overlay"></div>
            <div className="content">
                <h1>A² INFORMATICS</h1>
                <h2>Be Simple! Be a Sample!</h2>
                <img src={process.env.PUBLIC_URL+'/EM.png'} alt="explore" />
            </div>
        </div>
    </div>
    )
}

export default Header;