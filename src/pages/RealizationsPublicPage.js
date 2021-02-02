import React from "react";
import Data from "../data/realizationsPublic.json";
import {Link} from "react-router-dom";

const RealizationsPublicPage = () => {

    const list = Data.map(item => (
        <div key={item.id}>
            <Link to={`/realizacje-wnetrza-publiczne/${item.id}`}>
                <h3>{item.title}</h3>
            </Link>
            <p>{item.description}</p>
            <img src={item.bannerImage} alt=""/>
        </div>
    ))

    return(
        <div>
            Publiczne realizacje
            <div>
                {list}
            </div>
        </div>
    )
}

export default RealizationsPublicPage;