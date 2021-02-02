import React from "react";
import {Navbar} from "../components/Navbar";

const Navigation = () => {

    const links = [
        {name: "o nas", path: "/onas", subMenuItems: []},
        {name: "realizacje", path: "/realizacje", subMenuItems: [
                {name: "wnętrza prywatne", path: "/realizacje-wnetrza-prywatne", subMenuItems: []},
                {name: "wnętrza publiczne", path: "/realizacje-wnetrza-publiczne", subMenuItems: []},
            ]
        },
        {name: "projekty", path: "/projekty", subMenuItems: []},
        {name: "fotografia", path: "/fotografia", subMenuItems: []},
        {name: "referencje", path: "/referencje", subMenuItems: []},
        {name: "współpraca", path: "/wspolpraca", subMenuItems: []},
        {name: "kontakt", path: "/kontakt", subMenuItems: []},
    ];

    return (
        <Navbar links={links}/>
    );
}

export default Navigation;