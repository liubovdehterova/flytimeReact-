import React, { Component } from 'react';
import { Route, BrowserRouter, HashRouter } from 'react-router-dom';

import Nuv from '../MainComponent/Nuv';
import MainComponent from '../MainComponent';
import Footer from '../MainComponent/Footer';
import CreateSite from '../CreateSite';
import SeoPage from "../SeoPage";
import WebDesign from "../WebDesign";
import ContextualAdvertising from '../ContextualAdvertising';
import TechnicalSupport from '../TechnicalSupport';
import WebsiteImprovement from '../WebsiteImprovement';
import WebsiteRedesign from '../WebsiteRedesign'
import AnalyticsSetup from '../AnalyticsSetup'

class App extends Component {
    constructor() {
        super();
        this.state = {
            isShowNew: false,
            isShow: false
        };
        this.clearNuv = this.clearNuv.bind(this);
    }
    clearNuv() {
        const { isShowNew } = this.state;
        this.setState({
            isShowNew: !isShowNew,
        });
    }
    render() {
        return (
            <BrowserRouter>
                <Nuv
                    clearFromProps={this.clearNuv}
                    propsState={this.state.isShowNew}
                />

                <Route path="/main" component={ MainComponent} /> {/*Главная страница*/}
                <Route path="/DevelopSite" component={ CreateSite } /> {/*Разработка сайта*/}
                <Route path="/SeoPage" component={ SeoPage } /> {/*SEO-продвижение*/}
                <Route path="/WebDesign" component={ WebDesign } /> {/*WebDesign*/}
                <Route path="/ContextualAdvertising" component={ ContextualAdvertising } /> {/*ContextualAdvertising*/}
                <Route path="/TechnicalSupport" component={ TechnicalSupport } /> {/*TechnicalSupport*/}
                <Route path="/WebsiteImprovement" component={ WebsiteImprovement } /> {/*WebsiteImprovement*/}
                <Route path="/WebsiteRedesign" component={ WebsiteRedesign } /> {/*WebsiteRedesign*/}
                <Route path="/AnalyticsSetup" component={ AnalyticsSetup } /> {/*AnalyticsSetup*/}

                <Footer />
            </BrowserRouter>
        );
    }
}
export default App;