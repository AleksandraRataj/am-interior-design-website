import React, {useLayoutEffect} from "react";
import {NavLink} from "react-router-dom";

import '../styles/RealizationsProjectsPages.css';
import Footer from "../layouts/Footer";
import {motion} from "framer-motion";

const ProjectsPage = () => {

    useLayoutEffect(() => {
        window.scrollTo(0,0)
    });

    return (
        <div className="projects-page">
            <div className="projects-page__wrapper">

                <h1 className="projects-page__page-title page-title">projekty</h1>

                <div className="projects-page__elements-wrapper">
                    <div className="projects-page__element-wrapper">

                        <NavLink to="/projekty-wnetrza-prywatne" className="projects-page__link">
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 0.2}}
                                className="projects-page__img-wrapper">
                                <div className="projects-page__img--private"/>
                            </motion.div>
                        </NavLink>

                        <h2 className="projects-page__subtitle subtitle">projekty prywatne</h2>
                        <p className="projects-page__small-text small-text">
                            Z wielką przyjemnością wykonujemy projekty wnętrz mieszkań i domów prywatnych. Każdy klient
                            to nowa historia – poznawanie jego stylu życia, funkcjonowania i upodobań stylistycznych
                            traktujemy jako wyróżnienie. Ważne, aby do każdej takiej historii podejść indywidualnie i z
                            „czystą kartą”. Pamiętamy cały czas o tym, że tematem naszej pracy jest przestrzeń życiowa
                            klienta i to do jego stylu życia należy się dostosować. Bardzo cieszy nas to, że do naszej
                            pracowni trafiają osoby o różnych gustach wnętrzarskich i z różnymi potrzebami życiowymi. To
                            sprawia, że nie ograniczmy się do jednego stylu a każdy projekt jest nową, ciekawą przygodą.
                        </p>
                        <NavLink to="/projekty-wnetrza-prywatne" className="projects-page__button button">zobacz
                            więcej</NavLink>
                    </div>

                    <div className="projects-page__element-wrapper">

                        <NavLink to="/projekty-wnetrza-publiczne" className="projects-page__link">
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 0.2}}
                                className="projects-page__img-wrapper">
                                <div className="projects-page__img--public"/>
                            </motion.div>
                        </NavLink>

                        <h2 className="projects-page__subtitle subtitle">projekty publiczne</h2>
                        <p className="projects-page__small-text small-text">
                            Projekty wnętrz publicznych, takich jak restauracje, zakłady usługowe, pensjonaty i
                            apartamenty pod wynajem traktujemy jako wspaniałe wyzwanie. Zaczynając prace nad takim
                            projektem, musimy podejść do niego inaczej niż do wnętrz prywatnych – tutaj ważny jest
                            uniwersalizm i funkcjonalność takiej przestrzeni. Każda osoba pojawiająca się we wnętrzu
                            publicznym powinna czuć się w niej dobrze i wyjątkowo. Sztuką jest więc stworzenie wnętrza
                            dostosowanego do dużej liczby odbiorców, przy jednoczesnej dbałości o estetykę i wyjątkowość
                            tego miejsca. Ważne aby zostało zapamiętane a w kliencie pojawiła się potrzeba powrotu do
                            niego.
                        </p>
                        <NavLink to="/projekty-wnetrza-publiczne" className="projects-page__button button">zobacz
                            więcej</NavLink>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ProjectsPage;