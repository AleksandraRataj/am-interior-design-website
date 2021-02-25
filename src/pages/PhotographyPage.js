import React, {useLayoutEffect} from "react";
import Footer from "../layouts/Footer";

import "../styles/PhotographyPage.css";


const PhotographyPage = () => {

    useLayoutEffect(() => {
        window.scrollTo(0,0)
    });

    return (
        <div className="photo-page">
            <div className="photo-page__wrapper">
                <h1 className="photo-page__page-title page-title">fotografia</h1>
                <p className="photo-page__small-text small-text">
                    Fotografia jest naszą pasją i sposobem na życie.
                    Interesuje nas przede wszystkim szeroko pojęta przestrzeń – sposób kadrowania, moment uchwycenia
                    idealnego światła. Wszystko po to, aby wydobyć piękno z fotografowanego obiektu.
                </p>

                <div className="photo-page__author-info">
                    <div className="photo-page__author-image"/>

                    <div className="photo-page__info-wrapper">
                        <h2 className="photo-page__author-name subtitle">Łukasz Michalak</h2>
                        <p className="photo-page__author-story text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
            <p className="photo-page__text text">
                Obiektem tym może być wnętrze, architektura, produkt, jak również człowiek – ujęty w najważniejszych
                momentach swojego życia lub w tych bardziej prozaicznych. Najważniejsze jest dla nas, aby ujęcia te,
                bez względu na temat, były unikatowe i jedyne. Posiadamy wieloletnie doświadczenie w wykonywaniu
                zdjęć wnętrzom, architekturze i przedmiotom. Zapraszamy do współpracy tych, którzy pragną
                zaprezentować efekt swojej pracy w jak najlepszy sposób. Uwiecznianie tych ważnych momentów z
                ludzkiego życia sprawia, że nasza praca nabiera nowego wymiaru i daje nam ogromną satysfakcję.
                Jesteśmy zaszczyceni, że to właśnie na nas padł wybór, aby być obecnym w tych momentach i je
                zapisywać w Waszej pamięci. Dziękujemy za zaufanie i możemy zapewnić, że staniemy na wysokości
                zadania!
            </p>

            <Footer/>
        </div>
    )
}

export default PhotographyPage;