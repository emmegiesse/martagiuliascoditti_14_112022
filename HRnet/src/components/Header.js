// import REACT
import React from 'react';
import {Link} from 'react-router-dom';

// import STYLE
import '../style/headerStyle.css';

// import LOGO
import logo from '../assets/wealth_health_logo.svg';

const Header = () => {
    return (
        <header className="header">
            
            <nav>
                <Link to="/">
                    <img className="logo" src={logo} alt="logo Wealth Health" /></Link>
            </nav>
        </header>
    );
};

export default Header;