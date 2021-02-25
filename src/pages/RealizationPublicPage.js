import React from "react";
import ConcreteRealizationProject from "../components/ConcreteRealizationProject";

const RealizationPrivatePage = ({match}) => {

    const type = "RPublic";

    return (
        <ConcreteRealizationProject match={match} type={type}/>
    );

}

export default RealizationPrivatePage;