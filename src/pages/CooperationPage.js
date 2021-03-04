import React from "react";

import "../styles/CooperationPage.css";
import Footer from "../layouts/Footer";

const CooperationPage = () => {

    return (
        <div>


            <div className="cooperation-page">
                <h1 className="cooperation-page__title page-title">Współpraca</h1>

                <div className="cooperation-page__wrapper">
                    <div className="cooperation-page__item-wrapper"><a className="cooperation-page__link"
                                                                       href="https://sihome.pl" target="_blank"><img
                        className="cooperation-page__image" src="/images/cooperation/1.jpg" alt=""/></a></div>
                    <div className="cooperation-page__item-wrapper"><a className="cooperation-page__link"
                                                                       href="https://ceramcity.pl" target="_blank"><img
                        className="cooperation-page__image" src="/images/cooperation/Ceramcity-logo-retina.png" alt=""/></a>
                    </div>
                    <div className="cooperation-page__item-wrapper"><a className="cooperation-page__link"
                                                                       href="https://dekorianhome.pl"
                                                                       target="_blank"><img
                        className="cooperation-page__image" src="/images/cooperation/dekorianHome.png" alt=""/></a>
                    </div>
                    <div className="cooperation-page__item-wrapper"><a className="cooperation-page__link"
                                                                       href="https://www.salonyhoff.pl" target="_blank"><img
                        className="cooperation-page__image" src="/images/cooperation/hoff_logo-jpg.jpg" alt=""/></a>
                    </div>
                    <div className="cooperation-page__item-wrapper"><a className="cooperation-page__link"
                                                                       href="https://www.facebook.com/moma.concept"
                                                                       target="_blank"><img
                        className="cooperation-page__image" src="/images/cooperation/5.png" alt=""/></a></div>
                    <div className="cooperation-page__item-wrapper"><a className="cooperation-page__link"
                                                                       href="https://www.facebook.com/MbluDawidKaluski/"
                                                                       target="_blank"><img
                        className="cooperation-page__image" src="/images/cooperation/4.png" alt=""/></a></div>
                    <div className="cooperation-page__item-wrapper"><a className="cooperation-page__link"
                                                                       href="https://zlasu.pl" target="_blank"><img
                        className="cooperation-page__image" src="/images/cooperation/6.png" alt=""/></a></div>
                    <div className="cooperation-page__item-wrapper"><a className="cooperation-page__link"
                                                                       href="http://meblept.pl" target="_blank"><img
                        className="cooperation-page__image" src="/images/cooperation/3.png" alt=""/></a></div>
                    <div className="cooperation-page__item-wrapper"><a className="cooperation-page__link"
                                                                       href="https://salon.excellent.com.pl"
                                                                       target="_blank"><img
                        className="cooperation-page__image" src="/images/cooperation/2.png" alt=""/></a></div>


                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default CooperationPage;