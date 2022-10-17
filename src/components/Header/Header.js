import React, { useContext } from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const isActive = ({ isActive }) => isActive ? { color: 'orange' } : undefined;

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch((error) => console.log(error));
    }
    return (
        <div>
            <nav className='navbar'>
                <Link to="/"><img src={logo} alt="" /></Link>
                <p style={{ color: 'white' }}>{user?.email}</p>
                <ul id='nav-items' data-status="false" className="nav-items">
                    <li><NavLink style={isActive} to="/shop">Shop</NavLink></li>
                    <li><NavLink style={isActive} to="/orders">Orders</NavLink></li>
                    <li><NavLink style={isActive} to="/inventory">Manage Inventory</NavLink></li>
                    {
                        user.email ?
                            <li onClick={handleLogout}>Logout</li>
                            :
                            <li><NavLink style={isActive} to="/login">Login</NavLink></li>
                    }
                </ul>
                <FontAwesomeIcon onClick={navToggle} icon={faBars} className='menu-icon' />
            </nav>
        </div>
    );
};

const navToggle = () => {

    const navItems = document.getElementById("nav-items");
    if (navItems.getAttribute("data-status") === "false") {
        navItems.style.display = 'block';
        navItems.setAttribute("data-status", "true");
    } else {
        navItems.style.display = 'none';
        navItems.setAttribute("data-status", "false");
    }
}

export default Header;