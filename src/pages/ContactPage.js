import React, {useLayoutEffect} from "react";

import "../styles/ContactPage.css";

const ContactPage = () => {

    useLayoutEffect(() => {
        window.scrollTo(0,0)
    });

    return(
        <div className="contact-page">
            <div className="contact-page__wrapper">
                <h1 className="contact-page__title page-title">Kontakt</h1>
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
                    <a className="contact-page__link text" href="https://www.facebook.com/PogotowieProjektowe" target="_blank"><i className="fab fa-facebook-square contact-page__icon"/>Aleksandra Michalak Architektura Wnętrz</a>
                    <a className="contact-page__link text" href="https://www.instagram.com/aw_aleksandramichalak/" target="_blank"><i className="fab fa-instagram contact-page__icon"/>aw_aleksandramichalak</a>
                    <a className="contact-page__link text" href="mailto:aleksandra.s.michalak@gmail.com"><i className="fas fa-envelope-open-text contact-page__icon"/>aleksandra.s.michalak@gmail.com</a>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;