import React from 'react';
import {Route, Switch} from "react-router-dom";

import AboutPage from "../pages/AboutPage";
import CooperationPage from "../pages/CooperationPage";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import PhotographyPage from "../pages/PhotographyPage";
import ProjectsPage from "../pages/ProjectsPage";
import ProjectPage from "../pages/ProjectPage";
import RealizationsPrivatePage from "../pages/RealizationsPrivatePage";
import RealizationsPublicPage from "../pages/RealizationsPublicPage";
import RealizationPrivatePage from "../pages/RealizationPrivatePage";
import ReferencesPage from "../pages/ReferencesPage";
import RealizationPublicPage from "../pages/RealizationPublicPage";
import {Realizations} from "../pages/RealizationsPage";

const Page = () => {
    return(
        <>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/onas" component={AboutPage}/>
                <Route exact path="/realizacje" component={Realizations}/>
                <Route exact path="/realizacje-wnetrza-prywatne" component={RealizationsPrivatePage}/>
                <Route exact path="/realizacje-wnetrza-prywatne/:id" component={RealizationPrivatePage}/>
                <Route exact path="/realizacje-wnetrza-publiczne" component={RealizationsPublicPage}/>
                <Route exact path="/realizacje-wnetrza-publiczne/:id" component={RealizationPublicPage}/>
                <Route exact path="/projekty" component={ProjectsPage}/>
                <Route exact path="/projekty/:id" component={ProjectPage}/>
                <Route exact path="/fotografia" component={PhotographyPage}/>
                <Route exact path="/referencje" component={ReferencesPage}/>
                <Route exact path="/wspolpraca" component={CooperationPage}/>
                <Route exact path="/kontakt" component={ContactPage}/>
                <Route component={ErrorPage}/>
            </Switch>
        </>
    );
}

export default Page;