import React from "react";
import {Link} from "react-router-dom";
import Data from "../data/realizationsPrivate.json";


const RealizationsPrivatePage = () => {

    const list = Data.map(item => (
        <div key={item.id}>
            <Link to={`/realizacje-wnetrza-prywatne/${item.id}`}>
                <h3>{item.title}</h3>
            </Link>
            <p>{item.description}</p>
            <img src={item.bannerImage} alt=""/>
        </div>
    ))

    return(
        <div>
            Prywatne realizacje
            <div>
                {list}
            </div>
        </div>
    )
}

export default RealizationsPrivatePage;