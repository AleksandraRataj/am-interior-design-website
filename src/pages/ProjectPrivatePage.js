import React from "react";
import ConcreteRealizationProject from "../components/ConcreteRealizationProject";

const ProjectPrivatePage = ({match}) => {

    const type = "PPrivate";

    return (
        <ConcreteRealizationProject match={match} type={type}/>
    );

}

export default ProjectPrivatePage;