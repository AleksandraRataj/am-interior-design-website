import React, {useLayoutEffect, useState} from "react";

import ConcreteRealizationProject from "../components/ConcreteRealizationProject";

const RealizationPrivatePage = ({match}) => {

    const type = "RPrivate";

    return (
        <ConcreteRealizationProject match={match} type={type}/>
    );
}

export default RealizationPrivatePage;