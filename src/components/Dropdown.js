import React, {useState} from "react";
import {NavLink} from "react-router-dom";

//styles
import '../styles/Dropdown.css';

 const Dropdown = (props) => {

     const {subMenuItems = []} = props;

     const [click, setClick] = useState(false);

     const handleClick = () => setClick(!click);

    return(
        <>
            <ul className={click ? 'dropdown-menu dropdown-menu--clicked' : 'dropdown-menu'}
                onClick={handleClick}>
                {subMenuItems.map((item,index) => {
                    return(
                      <NavLink
                          key={index}
                          className="dropdown-menu__nav-link"
                          to={item.path}
                          exact={true}
                          onClick={() => setClick(false)}
                      >
                          {item.name}
                      </NavLink>
                    );
                })}
            </ul>
        </>
    );
}

export default Dropdown;