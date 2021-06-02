import React from 'react';
import logo from '../../images/logo.png';
import css from './Header.css';
const Header = () => {
    return (
        <div className="header">
           <img src={logo} alt="" />
           <nav>
               <a href="/shop">Shop</a>          
               <a href="/review">Order Review</a>
               <a href="/inventory">Manage Inventory</a>
            </nav>
            <input type="text" placeholder="Type here to search" />
        </div>
    );
};

export default Header;