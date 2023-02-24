import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='header'>
            <img alt="text" src={logo}></img>
            <div>
                <Link to="/">Shop</Link>
                <Link to="/Order">Order</Link>
                <Link to="/Inventory"> Manage Inventory </Link>
                <Link to="/About">About</Link>

            </div>
        </div >

    );
};

export default Header;