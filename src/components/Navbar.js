import React, {useState} from "react";
import {NavLink} from "react-router-dom";

//components
import Dropdown from './Dropdown';
import Logo from "./Logo";

//styles
import "../styles/Navbar.css";

export const Navbar = (props) => {

    const {links = []} = props;

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    let handleMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    }

    const handleMouseLeave = () => {
        if(window.innerWidth < 960) {
           setDropdown(false);
        } else {
           setDropdown(false);
        }
    }

    const handleClick = () => setClick(!click);

    const handleCloseMobileMenu = () => setClick(false);

    const menuLinks = links.map((item, index) => {
        return (
            <NavLink
                key={index}
                as={NavLink}
                className={item.name === 'realizacje' ? "navbar__nav-link-realizations" : "navbar__nav-link"}
                to={item.path}
                exact={true}
                onMouseLeave={ item.name === 'realizacje' ? handleMouseLeave : null}
                onMouseEnter={ item.name === 'realizacje' ? handleMouseEnter : null}
            >
                {item.name}
                {item.name === 'realizacje' ? <i className='fas fa-caret-down navbar__nav-link-realizations-icon'/> : null}
                {dropdown && <Dropdown subMenuItems={item.subMenuItems}/>}
            </NavLink>
        );


    });

    return(
        <>
        <nav className="navbar">
            <Logo/>
            <div className="navbar__div-hamburger-icon" onClick={handleClick}>
                <i className={click ? 'navbar__hamburger-icon fas fa-times' : 'navbar__hamburger-icon fas fa-bars'}/>
            </div>
            <ul
                className={click ? 'navbar__list navbar__list--active' : 'navbar__list'}
                onClick={handleCloseMobileMenu}
            >
                {menuLinks}
            </ul>
        </nav>
        </>
    );
}