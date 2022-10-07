import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='navbar'>
                <Link to="/"><img src={logo} alt="" /></Link>
                <ul id='nav-items' data-status="false" className="nav-items">
                    <li><Link to="/">Shop</Link></li>
                    <li><Link to="/orders">Order</Link></li>
                    <li><Link to="/inventory">Manage Inventory</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
                <FontAwesomeIcon onClick={navToggle} icon={faBars} className='menu-icon' />
            </nav>
        </div>
    );
};

const navToggle = () => {

    const navItems = document.getElementById("nav-items");
    if(navItems.getAttribute("data-status") === "false"){
        navItems.style.display = 'block';
        navItems.setAttribute("data-status", "true");
    } else{
        navItems.style.display = 'none';
        navItems.setAttribute("data-status", "false");
    }
}

export default Header;