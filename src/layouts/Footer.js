import React from 'react';

import '../styles/Footer.css';

const Footer = () => {

    let year = new Date().getUTCFullYear();

    return(
        <footer className="footer">
            <div className="footer__contact-wrapper">
                <div className="footer__logo-info">
                    <img className="footer__logo-img" src="/images/logo/logoBlack.png" alt=""/>
                    <p className="footer__logo-text small-text">Zapraszamy na nasze media społecznościowe.</p>
                    <div className="footer__icons">
                        <a className="footer__link" href="https://www.facebook.com/PogotowieProjektowe"><i className="fab fa-facebook-square  footer__icon"></i></a>
                        <a className="footer__link" href="https://www.instagram.com/aw_aleksandramichalak/"><i className="fab fa-instagram footer__icon"></i></a>
                        <a className="footer__link" href="mailto:aleksandra.s.michalak@gmail.com"><i className="fas fa-envelope-open-text footer__icon"></i></a>
                    </div>
                </div>
                <div className="footer__contact-info">
                    <h4 className="footer__title">Kontakt</h4>
                        <p className="footer__contact-text">Aleksandra Michalak</p>
                        <p className="footer__contact-text">tel: 796 989 234</p>
                        <p className="footer__contact-text">aleksandra.s.michalak@gmail.com</p>
                </div>
                <div className="footer__contact-info">
                    <h4 className="footer__title">Adres</h4>
                        <p className="footer__contact-text">Wieliczka</p>
                    <p className="footer__contact-text">Os. Szymanowskiego 12/26</p>

                    <p className="footer__contact-text">Kraków</p>
                        <p className="footer__contact-text">ul. Zakopiańska 56</p>
                </div>
            </div>
                <div className="footer__copyright-info">
                    <p className="footer__copyright-text small-text">© {year} Aleksandra Michalak. Wszelkie prawa zastrzeżone.</p>
                </div>
        </footer>
    );
}

export default Footer;