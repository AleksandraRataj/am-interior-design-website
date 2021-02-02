import React from "react";
import Data from "../data/realizationsPrivate.json";

const RealizationPrivatePage = ({match}) => {

    const realization = Data.map(data => {
        if (parseInt(match.params.id) === data.id) {
            let images = [];
            for(let i = 0; i < data.images.length; i++){
                images.push(<img key={data.images[i].id} src={data.images[i].path} alt=""/>)
            }

            return (
                <div key={data.id}>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                    {images}
                </div>
            )
        }
    });

        return (
            <div>
                <h1>Realizacja</h1>
                {realization}
            </div>
        )
    }

    export default RealizationPrivatePage;