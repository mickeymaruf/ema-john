import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='navbar'>
                <a href="/home"><img src={logo} alt="" /></a>
                <ul className="nav-items">
                    <li><a href="">Order</a></li>
                    <li><a href="">Order Review</a></li>
                    <li><a href="">Manage Inventory</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;