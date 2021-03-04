import React from 'react';
import {Route, Switch} from "react-router-dom";

import AboutPage from "../pages/AboutPage";
import CooperationPage from "../pages/CooperationPage";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import PhotographyPage from "../pages/PhotographyPage";
import ProjectsPage from "../pages/ProjectsPage";
import RealizationsPrivatePage from "../pages/RealizationsPrivatePage";
import RealizationsPublicPage from "../pages/RealizationsPublicPage";
import RealizationPrivatePage from "../pages/RealizationPrivatePage";
import ReferencesPage from "../pages/ReferencesPage";
import RealizationPublicPage from "../pages/RealizationPublicPage";
import {Realizations} from "../pages/RealizationsPage";
import ProjectsPrivatePage from "../pages/ProjectsPrivatePage";
import ProjectsPublicPage from "../pages/ProjectsPublicPage";
import ProjectPrivatePage from "../pages/ProjectPrivatePage";
import ProjectPublicPage from "../pages/ProjectPublicPage";
import ScrollToTop from "../components/ScrollToTop";

const Page = () => {
    return(
        <>
            <ScrollToTop/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/onas" component={AboutPage}/>
                <Route exact path="/realizacje" component={Realizations}/>
                <Route exact path="/realizacje-wnetrza-prywatne" component={RealizationsPrivatePage}/>
                <Route exact path="/realizacje-wnetrza-prywatne/:id" component={RealizationPrivatePage}/>
                <Route exact path="/realizacje-wnetrza-publiczne" component={RealizationsPublicPage}/>
                <Route exact path="/realizacje-wnetrza-publiczne/:id" component={RealizationPublicPage}/>
                <Route exact path="/projekty" component={ProjectsPage}/>
                <Route exact path="/projekty-wnetrza-prywatne" component={ProjectsPrivatePage}/>
                <Route exact path="/projekty-wnetrza-prywatne/:id" component={ProjectPrivatePage}/>
                <Route exact path="/projekty-wnetrza-publiczne" component={ProjectsPublicPage}/>
                <Route exact path="/projekty-wnetrza-publiczne/:id" component={ProjectPublicPage}/>
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