import React, {useLayoutEffect} from "react";

import "../styles/ContactPage.css";
import {motion} from "framer-motion";

const ContactPage = () => {

    return(
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.2}}
            className="contact-page">

            <div className="contact-page__bgc-wrapper">
                <h1 className="contact-page__title page-title">Kontakt</h1>
                <div  className="contact-page__info-wrapper">


                    <div className="contact-page__author">
                        <p className="contact-page__text text">Aleksandra Michalak</p>
                        <p className="contact-page__text text">tel: 796 989 234</p>
                        <p className="contact-page__text text">email: aleksandra.s.michalak@gmail.com</p>
                    </div>
                    <div className="contact-page__address">
                        <p className="contact-page__text text">Wieliczka</p>
                        <p className="contact-page__text text">Os. Szymanowskiego 12/26</p>
                        <br/>
                        <p className="contact-page__text text">Kraków</p>
                        <p className="contact-page__text text">ul. Zakopiańska 56</p>
                    </div>
                    <div className="contact-page__social-media">
                        <a className="contact-page__link text" href="https://www.facebook.com/PogotowieProjektowe"><i className="fab fa-facebook-square contact-page__icon"/>Aleksandra Michalak Architektura Wnętrz</a>
                        <a className="contact-page__link text" href="https://www.instagram.com/aw_aleksandramichalak/"><i className="fab fa-instagram contact-page__icon"/>aw_aleksandramichalak</a>
                        <a className="contact-page__link text" href="mailto:aleksandra.s.michalak@gmail.com"><i className="fas fa-envelope contact-page__icon"/>aleksandra.s.michalak@gmail.com</a>
                    </div>
                </div>

            </div>
        </motion.div>
    );
}

export default ContactPage;