import React from 'react';
import {NavLink} from "react-router-dom";

const Logo = () => {
    return(
        <NavLink exact to="/" className="navbar__logo">
            <img className="navbar__logo-img" src="/images/logo/logoWhite.png" alt=""/>
        </NavLink>
    );
}

export default Logo;