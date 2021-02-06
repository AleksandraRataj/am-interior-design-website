import React from "react";
import {NavLink} from "react-router-dom";

import '../styles/RealizationsPage.css';
import Footer from "../layouts/Footer";

export const Realizations = () => {
    return (
        <div className="realizations-page">
            <div className="realizations-page__wrapper">

                <h1 className="realizations-page__page-title page-title">REALIZAJCE</h1>

                {/*<p className="realizations-page__description text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore*/}
                {/*    itaque, laudantium maiores neque numquam possimus repudiandae totam vero vitae voluptatum! A, consectetur ea explicabo illo ipsam nesciunt nulla*/}
                {/*    rem reprehenderit. A, ad consequatur consequuntur dignissimos dolor dolorem eveniet in maxime molestias*/}
                {/*    nam neque nisi quibusdam, tempora velit voluptates. Ab debitis ea est harum iste iure libero numquam*/}
                {/*    odit, quidem quos.*/}
                {/*</p>*/}

                <div className="realizations-page__elements-wrapper">
                    <div className="realizations-page__element-wrapper">

                        <NavLink to="/realizacje-wnetrza-prywatne" className="realizations-page__link">
                            <div className="realizations-page__img-wrapper">
                                <div className="realizations-page__img--private"/>
                            </div>
                        </NavLink>

                        <h2 className="realizations-page__subtitle subtitle">Realizacje prywatne</h2>
                        <p className="realizations-page__small-text small-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam autem dolorem, dolorum
                            eaque modi nam natus neque nulla possimus quae quidem quis sed totam voluptates! Fugit in
                            inventore porro? Animi aut debitis eos exercitationem illo in laborum magni maiores modi natus
                            optio placeat quae.
                        </p>
                        <NavLink to="/realizacje-wnetrza-prywatne" className="realizations-page__button button">zobacz więcej</NavLink>
                    </div>

                    <div className="realizations-page__element-wrapper">
                        
                        <NavLink to="/realizacje-wnetrza-publiczne" className="realizations-page__link">
                            <div className="realizations-page__img-wrapper">
                                <div className="realizations-page__img--public"/>
                            </div>
                        </NavLink>

                        <h2 className="realizations-page__subtitle subtitle">Realizacje publiczne</h2>
                        <p className="realizations-page__small-text small-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam autem dolorem, dolorum
                            eaque modi nam natus neque nulla possimus quae quidem quis sed totam voluptates! Fugit in
                            inventore porro? Animi aut debitis eos exercitationem illo in laborum magni maiores modi natus
                            optio placeat quae.
                        </p>
                        <NavLink to="/realizacje-wnetrza-publiczne" className="realizations-page__button button">zobacz więcej</NavLink>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}