import React from "react";
import Footer from "../layouts/Footer";

import "../styles/AboutPage.css";
import {motion} from "framer-motion";
import Arrow from "../components/Arrow";

const AboutPage = () => {

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.2}}
            className="about-page">
            <Arrow/>
            <div className="about-page__wrapper">
                <h1 className="about-page__title page-title">o nas</h1>
                <div className="about-page__author-info">
                    <div className="about-page__author-image"/>
                    <div className="about-page__info-wrapper">
                        <h2 className="about-page__author-name subtitle">Aleksandra Michalak</h2>
                        <p className="about-page__author-story text">
                            Założycielka pracowni AM Architektura Wnętrz. Absolwentka Akademii Sztuk Pięknych w
                            Krakowie, wydział: Architektura Wnętrz. Laureatka konkursu Homebooka „Wnętrze Miasta”.
                            Realizuje własne projekty mieszkań i domów prywatnych, przestrzeni publicznych, przedmiotów
                            użytkowych, mebli. W projektowaniu zainspirowana naturą, prostotą, kolorem. Związana ze
                            sklepem Si Home, który współtworzyła. Sklep oferuje ekskluzywne elementy wyposażenia wnętrz.
                            Prywatnie mama Stasia i Heleny, żona Łukasza zamieszkała w Wieliczce, sercem w Beskidzie
                            Niskim.
                        </p>
                    </div>
                </div>
                <p className="about-page__text text">
                    Działamy z myślą o osobach, które nie mają głowy do zajmowania się tworzeniem ładnej i funkcjonalnej
                    przestrzeni życiowej, sprzyjającej dobremu samopoczuciu i rozwojowi. Wykonujemy i realizujemy
                    projekty wnętrz prywatnych, jak również publicznych – każde wyzwanie jest dla nas nowym rozdziałem,
                    w który wchodzimy z wdzięcznością dla tego, kto nam zaufa i powierzy tak ważne zadanie. Nie
                    ograniczamy się do jednego stylu, czy kolorystyki – pracujemy z osobami o różnych gustach i
                    zainteresowaniach, co zawsze jest wartością dodaną do projektu. Lubimy różnorodność i inspirujących
                    ludzi, dzięki którym projekty są indywidualne i niepowtarzalne.
                </p>
            </div>
            <section className="about-page__work-section">
                <h1 className="about-page__work-section-title title">Współpracę z klientem dzielimy na trzy etapy</h1>
                <div className="about-page__work-section-wrapper">
                    <img className="about-page__work-section-image" src="/images/aboutPage/projektKoncepcyjny.jpeg"
                         alt=""/>
                    <div className="about-page__work-section-text-wrapper">
                        <h2 className="about-page__work-section-subtitle subtitle">Projekt koncepcyjny</h2>
                        <p className="about-page__work-section-text text">
                            Poznajemy się nawzajem - omawiamy upodobania i potrzeby inwestora, dotyczące projektowanej
                            przestrzeni. Następnie dokonujemy inwentaryzacji wnętrz na miejscu inwestycji. Po zdobyciu
                            tych informacji powstaje projekt funkcjonalny, czyli rzut mieszkania w dwóch wersjach z
                            rozrysowanym układem ścian, mebli, wyposażenia. Po jego akceptacji rozpoczynamy prace nad
                            fotorealistycznymi wizualizacjami wnętrz, dzięki którym inwestor może „wejść” do
                            projektowanych pomieszczeń. Po etapie koncepcyjnym inwestor ma dokładny obraz wnętrza, w
                            którym przyjdzie mu funkcjonować.
                        </p>
                    </div>
                </div>
                <div className="about-page__work-section-wrapper">
                    <img className="about-page__work-section-image" src="/images/aboutPage/projektWykonawczy.jpeg"
                         alt=""/>
                    <div
                        className="about-page__work-section-text-wrapper about-page__work-section-text-wrapper--middle">
                        <h2 className="about-page__work-section-subtitle subtitle">Projekt wykonawczy</h2>
                        <p className="about-page__work-section-text text">
                            Na podstawie zaakceptowanych wizualizacji, powstają dokładne rysunki techniczne
                            projektowanego wnętrza: rzuty aranżacyjne, widoki ścian, projekt oświetlenia, elektryki,
                            projekt wod-kan, projekt podłóg i sufitów, projekty mebli i zabudów. Ponadto inwestor
                            otrzymuje pełną dokumentację tzw. specyfikację materiałową. Jest to spis materiałów
                            wykończeniowych, mebli, elementów wyposażenia wnętrz użytych w projekcie wraz z ich
                            ilościami. Dostarczamy również inwestorowi wyceny ze sprawdzonych sklepów branżowych, jak i
                            od współpracujących z nami fachowców tak, żeby powstał zarys kosztorysu inwestycji.
                        </p>
                    </div>
                </div>
                <div className="about-page__work-section-wrapper">
                    <img className="about-page__work-section-image" src="/images/aboutPage/nadzorProjekt.jpeg" alt=""/>
                    <div className="about-page__work-section-text-wrapper">
                        <h2 className="about-page__work-section-subtitle subtitle">Nadzór nad projektem</h2>
                        <p className="about-page__work-section-text text">
                            Jesteśmy obecni podczas wyboru materiałów wykończeniowych i mebli w punktach sprzedaży.
                            Spotykamy się z ekipą remontową i fachowcami w celu omówienia projektu. Jesteśmy w stałym
                            kontakcie z inwestorem i wykonawcami na wypadek pytań, czy rozwiązywania nieprzewidzianych
                            problemów dotyczących realizacji projektu. Wykonujemy również projekty „pod klucz”, podczas
                            których nadzorujemy dostawy materiałów i zastępujemy inwestora na budowie.
                        </p>
                    </div>
                </div>
                <p className="about-page__summary-text text">
                    Naszym priorytetem jest klient i stworzenie dla niego idealnej przestrzeni życiowej. Zapraszamy więc
                    wszystkich zainteresowanych wyrozumiałą i efektywną współpracą, która zaowocuje wnętrzem dostosowanym do
                    indywidualnych potrzeb i gustów.
                </p>
            </section>
            <Footer/>
        </motion.div>
    );
}

export default AboutPage;