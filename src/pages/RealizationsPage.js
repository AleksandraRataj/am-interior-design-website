import React from "react";
import {NavLink} from "react-router-dom";
import Footer from "../layouts/Footer";
import {motion} from "framer-motion";
import '../styles/RealizationsProjectsPages.css';
import Arrow from "../components/Arrow";


export const Realizations = () => {

    return (
        <div className="realizations-page">
            <Arrow/>
            <div className="realizations-page__wrapper">

                <h1 className="realizations-page__page-title page-title">realizacje</h1>

                <div className="realizations-page__elements-wrapper">
                    <div className="realizations-page__element-wrapper">

                        <NavLink to="/realizacje-wnetrza-prywatne" className="realizations-page__link">
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 0.2}}
                                className="realizations-page__img-wrapper">
                                <div className="realizations-page__img--private"/>
                            </motion.div>
                        </NavLink>

                        <h2 className="realizations-page__subtitle subtitle">realizacje prywatne</h2>
                        <p className="realizations-page__small-text small-text">
                            Z wielką przyjemnością wykonujemy projekty wnętrz mieszkań i domów prywatnych. Każdy klient
                            to nowa historia – poznawanie jego stylu życia, funkcjonowania i upodobań stylistycznych
                            traktujemy jako wyróżnienie. Ważne, aby do każdej takiej historii podejść indywidualnie i z
                            „czystą kartą”. Pamiętamy cały czas o tym, że tematem naszej pracy jest przestrzeń życiowa
                            klienta i to do jego stylu życia należy się dostosować. Bardzo cieszy nas to, że do naszej
                            pracowni trafiają osoby o różnych gustach wnętrzarskich i z różnymi potrzebami życiowymi. To
                            sprawia, że nie ograniczmy się do jednego stylu a każdy projekt jest nową, ciekawą przygodą.
                        </p>
                        <NavLink to="/realizacje-wnetrza-prywatne" className="realizations-page__button button">zobacz
                            więcej</NavLink>
                    </div>

                    <div className="realizations-page__element-wrapper">

                        <NavLink to="/realizacje-wnetrza-publiczne" className="realizations-page__link">
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 0.2}}
                                className="realizations-page__img-wrapper">
                                <div className="realizations-page__img--public"/>
                            </motion.div>
                        </NavLink>

                        <h2 className="realizations-page__subtitle subtitle">realizacje publiczne</h2>
                        <p className="realizations-page__small-text small-text">
                            Projekty wnętrz publicznych, takich jak restauracje, zakłady usługowe, pensjonaty i
                            apartamenty pod wynajem traktujemy jako wspaniałe wyzwanie. Zaczynając prace nad takim
                            projektem, musimy podejść do niego inaczej niż do wnętrz prywatnych – tutaj ważny jest
                            uniwersalizm i funkcjonalność takiej przestrzeni. Każda osoba pojawiająca się we wnętrzu
                            publicznym powinna czuć się w niej dobrze i wyjątkowo. Sztuką jest więc stworzenie wnętrza
                            dostosowanego do dużej liczby odbiorców, przy jednoczesnej dbałości o estetykę i wyjątkowość
                            tego miejsca. Ważne aby zostało zapamiętane a w kliencie pojawiła się potrzeba powrotu do
                            niego.
                        </p>
                        <NavLink to="/realizacje-wnetrza-publiczne" className="realizations-page__button button">zobacz
                            więcej</NavLink>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}