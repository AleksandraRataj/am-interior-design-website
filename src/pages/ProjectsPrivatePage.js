import React from "react";
import Data from "../data/projectsPrivate.json";
import {Link} from "react-router-dom";
import Footer from "../layouts/Footer";

import "../styles/RealizationsProjects.css";
import {motion} from "framer-motion";
import Arrow from "../components/Arrow";

const ProjectsPrivatePage = () => {

    const list = Data.map(item => (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.3}}
            className="realizations-private-page__element-wrapper"
            key={item.id}
        >
            <div className="realizations-private-page__wrapper-element-image">
                <img className="realizations-private-page__element-image" src={item.bannerImage} alt=""/>
            </div>
            <div className="realizations-private-page__wrapper-element-info">
                <h3 className="realizations-private-page__element-info-title subtitle">{item.title}</h3>
                <p className="realizations-private-page__element-info-description small-text">{item.shortDescription.length > 0 ? item.shortDescription : item.description}</p>
                <Link className="realizations-private-page__button button" to={`/projekty-wnetrza-prywatne/${item.id}`}>zobacz więcej</Link>
            </div>
        </motion.div>
    ))

    return(
        <div className="realizations-private-page">
            <Arrow/>
            <div className="realizations-private-page__wrapper">
                <h1 className="realizations-private-page__page-title page-title">Projekty prywatne</h1>
                <div className="realizations-private-page__list-wrapper">
                    {list}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ProjectsPrivatePage;