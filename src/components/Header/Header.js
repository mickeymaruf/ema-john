import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div>
            <nav className='navbar'>
                <a href="/home"><img src={logo} alt="" /></a>
                <ul id='nav-items' data-status="false" className="nav-items">
                    <li><a href="/order">Order</a></li>
                    <li><a href="/order-review">Order Review</a></li>
                    <li><a href="/manage">Manage Inventory</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
                <FontAwesomeIcon onClick={navToggle} icon={faBars} className='menu-icon' />
            </nav>
        </div>
    );
};

const navToggle = () => {

    const navItems = document.getElementById("nav-items");
    if(navItems.getAttribute("data-status") == "false"){
        navItems.style.display = 'block';
        navItems.setAttribute("data-status", "true");
    } else{
        navItems.style.display = 'none';
        navItems.setAttribute("data-status", "false");
        console.log('closed')
    }
}

export default Header;