import React, { Component } from 'react';
import { Route, BrowserRouter,Switch } from 'react-router-dom';

import Nuv from '../MainComponent/Nuv';
import MainComponent from '../MainComponent';
import Footer from '../MainComponent/Footer';
import CreateSite from '../CreateSite';
import SeoPage from "../SeoPage";
import WebDesign from "../WebDesign";
import ContextualAdvertising from '../ContextualAdvertising';
import TechnicalSupport from '../TechnicalSupport';
import WebsiteImprovement from '../WebsiteImprovement';
import WebsiteRedesign from '../WebsiteRedesign';
import AnalyticsSetup from '../AnalyticsSetup';
import OnlineStoreCreation from '../componentsCreateSiteMain/OnlineStoreCreation';
import CorporationCreateSite from "../componentsCreateSiteMain/CorporationCreateSite";
import CreateLendingPage from "../componentsCreateSiteMain/CreateLendingPage";
import BusinessCardWebsite from "../componentsCreateSiteMain/BusinessCardWebsite";
import BusinessSite from "../componentsCreateSiteMain/BusinessSite";
import PageDevAdaptDesign from "../componentsWebDesign/PageDevAdaptDesign";
import PageCorporationWebSite from "../componentsWebDesign/PageCorporationWebSite";
import PageLendingDesign from "../componentsWebDesign/PageLendingDesign"
import IndividualDesign from "../componentsWebDesign/IndividualDesign"


class App extends Component {
    constructor() {
        super();
        this.state = {
            isShow: false
        };
        this.clearNuv = this.clearNuv.bind(this);
    }
    clearNuv() {
        const { isShow } = this.state;
        this.setState({
            isShow: !isShow,
        });
    }
    render() {
        return (
            <BrowserRouter>
                <Nuv
                    clearFromProps={this.clearNuv}
                    propsState={this.state.isShow}
                />
                <Switch>
                    <Route exact path="/" component={ MainComponent} /> {/*Главная страница*/}
                    <Route path="/DevelopSite" component={ CreateSite } /> {/*Разработка сайта*/}
                    <Route path="/SeoPage" component={ SeoPage } /> {/*SEO-продвижение*/}
                    <Route path="/WebDesign" component={ WebDesign } /> {/*WebDesign*/}
                    <Route path="/ContextualAdvertising" component={ ContextualAdvertising } /> {/*ContextualAdvertising*/}
                    <Route path="/TechnicalSupport" component={ TechnicalSupport } /> {/*TechnicalSupport*/}
                    <Route path="/WebsiteImprovement" component={ WebsiteImprovement } /> {/*WebsiteImprovement*/}
                    <Route path="/WebsiteRedesign" component={ WebsiteRedesign } /> {/*WebsiteRedesign*/}
                    <Route path="/AnalyticsSetup" component={ AnalyticsSetup } /> {/*AnalyticsSetup*/}
                    <Route path="/OnlineStoreCreation" component={ OnlineStoreCreation } /> {/*OnlineStoreCreation*/}
                    <Route path="/CorporationCreateSite" component={ CorporationCreateSite } /> {/*CorporationCreateSite*/}
                    <Route path="/CreateLendingPage" component={ CreateLendingPage } /> {/*CreateLendingPage*/}
                    <Route path="/BusinessCardWebsite" component={ BusinessCardWebsite } /> {/*BusinessCardWebsite*/}
                    <Route path="/BusinessSite" component={ BusinessSite } /> {/*BusinessSite*/}
                    <Route path="/PageDevAdaptDesign" component={ PageDevAdaptDesign } /> {/*PageDevAdaptDesign*/}
                    <Route path="/PageCorporationWebSite" component={ PageCorporationWebSite } /> {/*PageCorporationWebSite*/}
                    <Route path="/PageLendingDesign" component={ PageLendingDesign } /> {/*PageLendingDesign*/}
                    <Route path="/IndividualDesign" component={ IndividualDesign } /> {/*IndividualDesign*/}
                </Switch>

                <Footer />
            </BrowserRouter>
        );
    }
}
export default App;