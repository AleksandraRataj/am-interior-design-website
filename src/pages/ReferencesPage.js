import React from "react";
import {motion} from "framer-motion";
import "../styles/ReferencesPage.css";
import Footer from "../layouts/Footer";
import Arrow from "../components/Arrow";

const ReferencesPage = () => {

    return(
        <div className="references-page">
            <div className="references-page__wrapper">
                <h1 className="references-page__title page-title">referencje</h1>

                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.2}}
                        className="references-page__references-wrapper">
                        <div className="references-page__reference ref1"></div>
                        <div className="references-page__reference ref2"></div>
                        <div className="references-page__reference ref3"></div>
                        <div className="references-page__reference ref4"></div>
                        <div className="references-page__reference ref5"></div>
                        <div className="references-page__reference ref6"></div>
                    </motion.div>
            </div>
            <Arrow/>
            <Footer/>
        </div>
    )
}

export default ReferencesPage;