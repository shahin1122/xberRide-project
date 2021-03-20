import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import css from './Header.css';

const Header = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header">
            {/* <img src={logo} alt=""/> */}
            <nav className="navMenu">
                <h3>Ticket Confirm Counter(TCC)</h3>
                <Link to="/home">Home</Link>
                <Link to="/login">Destination</Link>
                <Link to='/login'>  Login</Link>
                <Link to='#'>  Blog</Link>
                <Link to='#'>  Contact</Link>
                <span style={{color:'blue' }}>{loggedInUser.name}</span>
                {/* <Link to="/inventory">Manage Inventory</Link> */}
                
            </nav>
           
            
        </div>
    );
};

export default Header;