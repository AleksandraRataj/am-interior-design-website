import React from "react";
import Footer from "../layouts/Footer";

import "../styles/PhotographyPage.css";
import {motion} from "framer-motion";
import Arrow from "../components/Arrow";


const PhotographyPage = () => {

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.1}}
            className="photo-page">
            <Arrow/>
            <div className="photo-page__background-wrapper">

                <div className="photo-page__flex-wrapper">

                    <h1 className="photo-page__page-title page-title">fotografia</h1>

                    <div className="photo-page__author-info">
                        <div className="photo-page__author-image"/>
                        <div className="photo-page__info-wrapper">
                            <h2 className="photo-page__author-name subtitle">Łukasz Michalak</h2>
                            <p className="photo-page__author-story text">
                                Fotografia jest naszą pasją i sposobem na życie. Interesuje nas przede wszystkim szeroko
                                pojęta
                                przestrzeń - sposób kadrowania, moment uchwycenia idealnego światła, wszystko po to aby
                                wydobyć piękno z
                                fotografowanego obiektu. Obiektem tym może być wnętrze, architektura, produkt, jak również
                                człowiek -
                                ujęty w najważniejszych momentach swojego życia lub w tych bardziej prozaicznych.
                                Najważniejsze jest dla
                                nas aby ujęcia te, bez względu na temat, były unikatowe i jedyne.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

                <div className="photo-page__wrapper">
                    <p className="photo-page__text text">
                        Zajmujemy się fotografią wnętrz, architektury, produktów, jak również fotografią okolicznościową.
                        Ważną
                        rolę w naszej pracy zawodowej odgrywa również fotografia zabytków, która mieści się w charakterze
                        fotografii produktowej, ale jest szczególnym zadaniem, wymagającym od nas wyjątkowego szacunku do
                        uwiecznianego obiektu.
                    </p>

                    <div className="photo-page__products-wrapper">
                        <div className="photo-page__product">
                            <div className="photo-page__product-image fot1"/>
                            <div className="photo-page__product-text">
                                <h2 className="photo-page__product-title subtitle">fotografia wnętrz</h2>
                                <p className="photo-page__product-description text">
                                    Zapraszamy do współpracy tych, którzy pragną
                                    zaprezentować efekt swojej pracy w jak najlepszy sposób. Uwiecznienie zaprojektowanego
                                    wnętrza w
                                    sposób profesjonalny i ciekawy jest podstawą pracy projektanta, który w ten sposób
                                    buduje swoje
                                    portfolio i dzięki czemu przyciąga nowych klientów. Na tym podłożu mamy wieloletnie
                                    doświadczenie i ugruntowaną pozycję wśród stałych klientów – autorów projektów wnętrz.
                                </p>
                            </div>
                        </div>
                        <div className="photo-page__product">
                            <div className="photo-page__product-image"/>
                            <div className="photo-page__product-text">
                                <h2 className="photo-page__product-title subtitle">fotografia architektury</h2>
                                <p className="photo-page__product-description text">
                                    Architektura fascynowała nas od zawsze więc z każdej podróży przywozimy ogromną ilość
                                    zdjęć
                                    pokazujących architekturę – jako tkankę miasta, jak również jej pojedyncze przykłady.
                                    Współpracujemy na stałe z biurami architektonicznymi, dla których bardzo ważne jest
                                    profesjonalne zaprezentowanie efektów swojej pracy. Dysponujemy odpowiednim sprzętem
                                    niezbędnym
                                    do uwiecznienia dużych obiektów (dron, odpowiednie obiektywy i statywy).
                                </p>
                            </div>
                        </div>
                        <div className="photo-page__product">
                            <div className="photo-page__product-image"/>
                            <div className="photo-page__product-text">
                                <h2 className="photo-page__product-title subtitle">fotografia produktowa </h2>
                                <p className="photo-page__product-description text">
                                    Fotografia produktowa jest głównym elementem wpływającym na zainteresowanie i decyzje
                                    klienta.
                                    Najważniejsze jest pierwsze wrażenie - więc prezentacja produktu zaczyna się właśnie od
                                    profesjonalnej sesji fotograficznej.
                                    Wyjątkowe miejsce zajmuje też dla nas fotografowanie zabytków. Współpracujemy z
                                    instytucjami
                                    zajmującymi się uwiecznianiem i archiwizacją obiektów zabytkowych takich jak: eksponaty
                                    muzealne, starodruki, fragmenty małej architektury jak rzeźby czy płaskorzeźby,
                                    zabytkowe
                                    tkaniny i malarstwo.
                                </p>
                            </div>
                        </div>
                        <div className="photo-page__product">
                            <div className="photo-page__product-image"/>
                            <div className="photo-page__product-text">
                                <h2 className="photo-page__product-title subtitle">fotografia okolicznościowa</h2>
                                <p className="photo-page__product-description text">
                                    Wyjątkowe miejsce w naszej działalności zajmuje fotografia okolicznościowa, przede
                                    wszystkim
                                    ślubna, jak również z powodzeniem wykonujemy fotorelacje z imprez, konferencji,
                                    festiwali,
                                    słowem chcemy być tam, gdzie dzieje się coś ważnego dla większej grupy ludzi lub dla
                                    pojedynczego człowieka. Uwiecznianie tych ważnych momentów z ludzkiego życia sprawia, że
                                    nasza
                                    praca nabiera nowego wymiaru i daje nam ogromną satysfakcję. Jesteśmy zaszczyceni, że to
                                    właśnie
                                    na nas padł wybór, aby być obecnym w tych momentach i je zapisywać w Waszej pamięci.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="photo-page__contact-wrapper">
                        <div className="photo-page__logo">
                            <img className="photo-page__image" src="/images/logo/logo_MF.PNG" alt=""/>
                        </div>
                        <div className="photo-page__contact">
                            <a  className="photo-page__contact-link" href="http://michalakfotografia.pl" target="_blank">
                                <i className="fas fa-camera-retro photo-page__icon"></i>
                                michalakfotografia.pl
                            </a>
                            <a  className="photo-page__contact-link" href="https://www.facebook.com/michalakfotografia" target="_blank">
                                <i className="fab fa-facebook-square photo-page__icon"></i>
                                Michalak Fotografia
                            </a>
                            <a  className="photo-page__contact-link" href="https://www.instagram.com/michalak_fotografia/" target="_blank">
                                <i className="fab fa-instagram photo-page__icon"></i>
                                michalak_fotografia
                            </a>
                            <p className="photo-page__contact-link" ><i className="fas fa-phone-square-alt photo-page__icon"></i>tel: 790236000</p>
                            <a  className="photo-page__contact-link" href="mailto:michalakfotografia@gmail.com"><i className="fas fa-envelope photo-page__icon"></i>email: michalakfotografia@gmail.com</a>
                        </div>
                    </div>
                </div>



            <Footer/>
        </motion.div>
    )
}

export default PhotographyPage;