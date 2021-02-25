import React from "react";
import ConcreteRealizationProject from "../components/ConcreteRealizationProject";

const ProjectPublicPage = ({match}) => {

    const type = "PPublic";

    return (
        <ConcreteRealizationProject match={match} type={type}/>
    );

}

export default ProjectPublicPage;