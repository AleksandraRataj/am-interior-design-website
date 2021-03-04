import React, {useState, useLayoutEffect} from "react";
import {motion} from "framer-motion";
import Modal from "./Modal";

import Data_RPublic from "../data/realizationsPublic.json";
import Data_RPrivate from "../data/realizationsPrivate.json";
import Data_PPublic from "../data/projectsPublic.json";
import Data_PPrivate from "../data/projectsPrivate.json";

import "../styles/ConcreteRealizationProjectPage.css";
import Footer from "../layouts/Footer";
import Arrow from "./Arrow";

const ConcreteRealizationProject = ({match, type}) => {

    let datasource = [];

    if(type === "RPublic") {
        datasource = Data_RPublic;
    } else if (type === "RPrivate") {
        datasource = Data_RPrivate;
    } else if (type === "PPublic") {
        datasource = Data_PPublic;
    } else if (type === "PPrivate") {
        datasource = Data_PPrivate;
    } else {
        datasource = [];
    }

    const [selectedImage, setSelectedImage] = useState(null);

    const images = [];

    const realization = datasource.map(data => {

        if (parseInt(match.params.id) === data.id) {

            for (let i = 0; i < data.images.length; i++) {
                images.push({
                    id: i,
                    path: data.images[i].path,
                });
            }

            let realizationImages = [];

            for (let i = 0; i < images.length; i++) {

                realizationImages.push(

                    <motion.div
                        className="concrete-project__one-image-wrapper"
                        onClick={() => setSelectedImage(images[i])}
                    >
                        <motion.img
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.3}}
                            className="concrete-project__image"
                            key={images[i].id}
                            src={images[i].path}
                            alt=""
                        />
                    </motion.div>
                );
            }

            const photo = "Zdjęcia: + {data.photographer}"

            return (
                <div className="concrete-project__wrapper" key={data.id}>
                    <h1 className="concrete-project__title page-title">{data.title}</h1>
                    <p className="concrete-project__description text">{data.description}</p>

                    <div className="concrete-project__details-wrapper">

                        <p className="concrete-project__details text">
                            <span className="bold-text text">Rodzaj wnętrza: </span>
                            {data.interiorType}
                        </p>
                        <p className="concrete-project__details concrete-project__details--yardage text">
                            <span className="bold-text text">Metraż objęty projektem: </span>
                            {data.yardage}m<sup>2</sup>
                        </p>
                        <p className="concrete-project__details text">
                            <span className="bold-text text">Styl: </span>
                            {data.style}
                        </p>
                        <p className="concrete-project__details text">
                            <span className="bold-text text">Projektant: </span>
                            {data.designer}
                        </p>

                        <p className="concrete-project__details text">
                            {data.photographer == null ? null : <span className="bold-text text">Zdjęcia: </span>}
                            {data.photographer == null ? null : data.photographer}
                        </p>
                        <p className="concrete-project__details text">
                            {data.visualizations == null ? null : <span className="bold-text text">Wizualizacje: </span>}
                            {data.visualizations == null ? null : data.visualizations}
                        </p>
                        <p className="concrete-project__details text">
                            {data.cooperation == null ? null : <span className="bold-text text">Współpraca: </span>}
                            {data.cooperation == null ? null : data.cooperation}
                        </p>

                    </div>

                    <div className="concrete-project__images-wrapper">
                        {realizationImages}
                    </div>
                </div>
            );
        }
    });

    return (
        <div>
            <div className="concrete_project">
                <Arrow/>
                {realization}
                {selectedImage && <Modal images={images} selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
            </div>
            <Footer/>
        </div>

    );
}

export default ConcreteRealizationProject;