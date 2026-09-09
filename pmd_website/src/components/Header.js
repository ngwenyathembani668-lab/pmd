import React from 'react';
import './Header.css';

const Header = () => {
    return (


        <nav className='
            flex
            justify-between
            p-20px
        '>

            <div>
                <span className='logo'>PMD</span>
            </div>

            <div>

                <ul className='nav-links'>
                    <li>Home</li>
                    <li>Printing & ID</li>
                    <li>Studio & Design</li>
                    <li>Online Apps</li>
                    <li>Vehicle & Shirts</li>
                </ul>

            </div>

            <div>
                <button className='head-btn'>Contact</button>
            </div>

        </nav>


    )
}

export default Header;
