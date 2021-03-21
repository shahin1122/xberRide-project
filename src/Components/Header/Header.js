import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import css from './Header.css';

const Header = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);



    return (
        <div className="topnav" id="myTopnav">
            {/* <img src={logo} alt=""/> */}
           
                
                <div className="mainNav">
                    <Link className="a" to="/home">Home</Link>
                    <Link className="a" to="/login">Destination</Link>
                    <Link className="a" to='/login'>  Login</Link>
                    <Link className="a" to='#'>  Blog</Link>
                    <Link className="a" to='#'>  Contact</Link>
                    <Link className="a" href="javascript:void(0);" class="icon" onclick="myFunction()">
                        <i class="fa fa-bars"></i>
                    </Link>
                    <span className="a" style={{color:'blue' }}>{loggedInUser.name}</span>
                </div>
                {/* <Link to="/inventory">Manage Inventory</Link> */}
                
           
           
            
        </div>
    );
};

export default Header;