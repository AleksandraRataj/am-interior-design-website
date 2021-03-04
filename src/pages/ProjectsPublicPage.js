import React from "react";
import Data from "../data/projectsPublic.json";
import {Link} from "react-router-dom";
import Footer from "../layouts/Footer";

import "../styles/RealizationsProjects.css";
import {motion} from "framer-motion";
import Arrow from "../components/Arrow";

const ProjectsPublicPage = () => {

    const list = Data.map(item => (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.3}}
            className="realizations-public-page__element-wrapper"
            key={item.id}
        >
            <div className="realizations-public-page__wrapper-element-image">
                <img className="realizations-public-page__element-image" src={item.bannerImage} alt=""/>
            </div>

            <div className="realizations-public-page__wrapper-element-info">
                <h3 className="realizations-public-page__element-info-title subtitle">{item.title}</h3>
                <p className="realizations-public-page__element-info-description small-text">{item.shortDescription.length > 0 ? item.shortDescription : item.description}</p>
                <Link className="realizations-public-page__button button" to={`/projekty-wnetrza-publiczne/${item.id}`}>zobacz
                    więcej</Link>
            </div>

        </motion.div>
    ));

    return (
        <div className="realizations-public-page">
            <Arrow/>
            <div className="realizations-public-page__wrapper">
                <h1 className="realizations-public-page__page-title page-title">Publiczne realizacje</h1>
                <div className="realizations-public-page__list-wrapper">
                    {list}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ProjectsPublicPage;