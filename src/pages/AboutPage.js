import React from "react";

import "../styles/AboutPage.css";
import Footer from "../layouts/Footer";

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="about-page__wrapper">

                <h1 className="about-page__title page-title">o nas</h1>

                <div className="about-page__author-info">
                    <div className="about-page__author-image"/>
                    <div className="about-page__info-wrapper">
                        <h2 className="about-page__author-name subtitle">Aleksandra Michalak</h2>
                        <p className="about-page__author-story text">
                            Założycielka pracowni AM Architektura Wnętrz. Absolwentka Akademii Sztuk Pięknych w
                            Krakowie, wydział: Architektura Wnętrz. Laureatka konkursu Homebooka „Wnętrze Miasta”.
                            Realizowała własne projekty mieszkań i domów prywatnych, przestrzeni publicznych,
                            przedmiotów użytkowych, mebli.
                            W projektowaniu zainspirowana naturą, prostotą, kolorem. Prywatnie mama Stasia i Heleny,
                            żona Łukasza zamieszkała w Wieliczce, sercem w Beskidzie Niskim.
                        </p>
                    </div>
                </div>

                <p className="about-page__text text">
                    Działamy z myślą o osobach, które nie mają głowy do zajmowania się tworzeniem ładnej i funkcjonalnej
                    przestrzeni życiowej, sprzyjającej dobremu samopoczuciu i rozwojowi. Wykonujemy i realizujemy
                    projekty wnętrz prywatnych, jak również publicznych – każde wyzwanie jest dla nas nowym rozdziałem,
                    w który wchodzimy z wdzięcznością dla tego, kto nam zaufał i powierzył tak ważne zadanie. Nie
                    ograniczamy się do jednego stylu, czy kolorystyki – mieliśmy przyjemność pracować z osobami o
                    różnych gustach i zainteresowaniach, co zawsze jest dla nas wartością dodaną do projektu. Lubimy
                    różnorodność i inspirujących ludzi, dzięki którym projekty są indywidualne i niepowtarzalne.
                </p>
            </div>

            <section className="about-page__work-section">

                <h1 className="about-page__work-section-title title">Współpracę z klientem dzielimy na trzy etapy</h1>
                <p className="about-page__work-section-small-text small-text">Naszym priorytetem jest klient i stworzenie dla
                    niego idealnej przestrzeni życiowej.</p>

                <div className="about-page__work-section-wrapper">
                    <img className="about-page__work-section-image" src="/images/aboutPage/img1.jpg" alt=""/>
                    <div className="about-page__work-section-text-wrapper">
                        <h2 className="about-page__work-section-subtitle subtitle">Projekt koncepcyjny</h2>
                        <p className="about-page__work-section-text text">
                            Poznajemy się nawzajem – omawiamy upodobania i potrzeby inwestora, dotyczące projektowanej
                            przestrzeni. Wymieniamy się mailami i w razie potrzeby spotykamy się w sklepach branżowych,
                            żeby dogłębnie poznać gust inwestora. Następnie dokonujemy inwentaryzacji wnętrz. Po
                            zdobyciu tych informacji powstaje projekt koncepcyjny, czyli rzut mieszkania w dwóch
                            wersjach z rozrysowanym układem ścian, mebli, wyposażenia. Po jego akceptacji rozpoczynamy
                            prace nad fotorealistycznymi wizualizacjami wnętrz, dzięki którym inwestor może „wejść” do
                            projektowanych pomieszczeń. Po etapie koncepcyjnym inwestor ma dokładny obraz wnętrza, w
                            którym przyjdzie mu funkcjonować.
                        </p>
                    </div>


                </div>
                <div className="about-page__work-section-wrapper">
                    <img className="about-page__work-section-image" src="/images/aboutPage/img2.jpg" alt=""/>
                    <div className="about-page__work-section-text-wrapper about-page__work-section-text-wrapper--middle">
                        <h2 className="about-page__work-section-subtitle subtitle">Projekt wykonawczy</h2>
                        <p className="about-page__work-section-text text">
                            Na podstawie zaakceptowanych wizualizacji, powstają dokładne rysunki techniczne
                            projektowanego wnętrza: rzuty aranżacyjne, widoki ścian, projekt oświetlenia, projekt
                            wod-kan, projekt podłóg i sufitów, projekty mebli i zabudów. Ponadto inwestor otrzymuje
                            pełną dokumentację tzw. specyfikacje materiałową. Jest to spis materiałów wykończeniowych,
                            mebli, elementów wyposażenia wnętrz wraz z ich ilościami. Wskazujemy także miejsca ich
                            dostępności.
                        </p>
                    </div>
                </div>
                <div className="about-page__work-section-wrapper">
                    <img className="about-page__work-section-image" src="/images/aboutPage/img3.jpg" alt=""/>
                    <div className="about-page__work-section-text-wrapper">
                    <h2 className="about-page__work-section-subtitle subtitle">Nadzór nad projektem</h2>
                    <p className="about-page__work-section-text text">
                        Jesteśmy obecni podczas wyboru materiałów wykończeniowych i mebli w punktach sprzedaży.
                        Spotykamy się z ekipą remontową i fachowcami w celu omówienia projektu. Jesteśmy w stałym
                        kontakcie z inwestorem i wykonawcami na wypadek pytań, czy rozwiązywania nieprzewidzianych
                        problemów dotyczących realizacji projektu. Naszym priorytetem jest klient i stworzenie dla niego
                        idealnej przestrzeni życiowej. Zapraszamy więc wszystkich zainteresowanych wyrozumiałą i
                        efektywną współpracą, która zaowocuje wnętrzem dostosowanym do indywidualnych potrzeb i gustów.
                    </p>
                    </div>
                </div>
            </section>

            <footer>
                {<Footer/>}
            </footer>

        </div>
    )
}

export default AboutPage;