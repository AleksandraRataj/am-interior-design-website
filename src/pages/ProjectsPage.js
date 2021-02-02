import React from "react";
import Data from "../data/projects.json";
import {Link} from "react-router-dom";

const ProjectsPage = () => {

    const list = Data.map(item => (
        <div key={item.id}>
            <Link to={`/projekty/${item.id}`}>
                <h3>{item.title}</h3>
            </Link>
            <p>{item.description}</p>
            <img src={item.bannerImage} alt=""/>
        </div>
    ))

    return(
        <div>
            <h1>Projekty</h1>
            <div>
                {list}
            </div>
        </div>
    )
}

export default ProjectsPage;