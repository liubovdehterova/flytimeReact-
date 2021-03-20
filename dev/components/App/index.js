import React, { Component } from 'react';
import { Route, BrowserRouter, HashRouter } from 'react-router-dom';

import Nuv from '../MainComponent/Nuv';
import MainComponent from '../MainComponent';
import Footer from '../MainComponent/Footer';
import CreateSite from '../CreateSite';
import SeoPage from "../SeoPage";
import WebDesine from "../WebDesine";
import ContextualAdvertising from '../ContextualAdvertising'
import TechnicalSupport from '../TechnicalSupport'

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
                <Route path="/WebDesign" component={ WebDesine } /> {/*WebDesign*/}
                <Route path="/ContextualAdvertising" component={ ContextualAdvertising } /> {/*ContextualAdvertising*/}
                <Route path="/TechnicalSupport" component={ TechnicalSupport } />

                <Footer />
            </BrowserRouter>
        );
    }
}
export default App;