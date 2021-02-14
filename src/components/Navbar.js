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

    const [dropdownRealizations, setDropdownRealizations] = useState(false);
    const [dropdownProjects, setDropdownProjects] = useState(false);

    let handleMouseEnterRealizations = () => {
        if(window.innerWidth < 1024) {
            setDropdownRealizations(false);
        } else {
            setDropdownRealizations(true);
        }
    }

    const handleMouseLeaveRealizations = () => {
        if(window.innerWidth < 1024) {
           setDropdownRealizations(false);
        } else {
           setDropdownRealizations(false);
        }
    }

    let handleMouseEnterProjects = () => {
        if(window.innerWidth < 1024) {
            setDropdownProjects(false);
        } else {
            setDropdownProjects(true);
        }
    }

    const handleMouseLeaveProjects = () => {
        if(window.innerWidth < 1024) {
            setDropdownProjects(false);
        } else {
            setDropdownProjects(false);
        }
    }

    const handleClick = () => setClick(!click);

    const handleCloseMobileMenu = () => setClick(false);

    const menuLinks = links.map((item, index) => {
        return (
            <NavLink
                key={index}
                className={(item.name === 'realizacje' || item.name === 'projekty') ? "navbar__nav-link--active" : "navbar__nav-link"}
                to={item.path}
                exact={true}
                onMouseLeave={ (item.name === 'realizacje' ? handleMouseLeaveRealizations : null) || (item.name === 'projekty' ? handleMouseLeaveProjects : null)}
                onMouseEnter={ (item.name === 'realizacje' ? handleMouseEnterRealizations : null) || (item.name === 'projekty' ? handleMouseEnterProjects : null)}
            >
                {item.name}
                {(item.name === 'realizacje' || item.name === 'projekty') ? <i className='fas fa-caret-down navbar__nav-link--active-icon'/> : null}
                {item.name === 'realizacje' ? (dropdownRealizations && <Dropdown subMenuItems={item.subMenuItems}/>) : null }
                {item.name === 'projekty' ? (dropdownProjects && <Dropdown subMenuItems={item.subMenuItems}/>) : null }
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