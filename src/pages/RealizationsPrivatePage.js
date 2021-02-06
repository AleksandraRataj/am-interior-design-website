import React from "react";
import {Link} from "react-router-dom";
import Data from "../data/realizationsPrivate.json";

import "../styles/RealizationsPrivatePage.css";


const RealizationsPrivatePage = () => {

    const list = Data.map(item => (
        <div className="realizations-private-page__element-wrapper" key={item.id}>
            <div className="realizations-private-page__element-wrapper--info">
                <h3 className="realizations-private-page__title subtitle">{item.title}</h3>
                <p className="realizations-private-page__description small-text">{item.description}</p>
                <Link className="realizations-private-page__button button" to={`/realizacje-wnetrza-prywatne/${item.id}`}>zobacz więcej</Link>
            </div>
            <img className="realizations-private-page__element-image" src={item.bannerImage} alt=""/>
        </div>
    ))

    return(
        <div className="realizations-private-page">
            <div className="realizations-private-page__wrapper">
                <h1 className="realizations-private-page__page-title page-title">Prywatne realizacje</h1>
                <div className="realizations-private-page__list-wrapper">
                    {list}
                </div>
            </div>
        </div>
    );
}

export default RealizationsPrivatePage;