import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Nuv from '../Nuv';
// import MainComponent from '../MainComponent';
import Footer from '../Footer';
import CreateSite from '../../CreateSite';
import SeoPage from "../../SeoPage";



class App extends Component {
    constructor() {
        super();
        this.state = {
            isShowNew: false,
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
        if(document.querySelector('.two')) {
            document.querySelector('.two').remove()
        }
        return (
            <BrowserRouter>
                <Nuv
                    clearFromProps={this.clearNuv}
                    propsState={this.state.isShowNew}
                />
                <div>
                    {/*< MainComponent  /> /!*Главная страница*!/*/}
                    {/*<CreateSite /> Страница разрабртка сайтов*/}
                    <SeoPage />
                </div>
                <Footer />
            </BrowserRouter>
        );
    }
}
export default App;