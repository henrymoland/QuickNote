import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import SignedInLinks from './SignedIn';
import SignedOutLinks from './SignedOut';

const Navbar = () => {
    return (
        <nav className="Nav-wrapper light-blue lighten-1">
            <div className="container">
                <Link to = '/' className="brand-logo"><img src={logo} height="35" width="40" alt="logo"></img>QuickNote</Link>
                <SignedInLinks/>
                <SignedOutLinks/>

            </div>
        </nav>
    )
};

export default Navbar;