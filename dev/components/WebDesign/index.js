import React, { Component } from 'react';

import Bunner from './Bunner';
import StartPageWeb from './StartPageWeb';
import ProcessDevDesign from "./ProcessDevDesing";
import MobileDesign from "./MobileDesign";
import Main from "./Main";
import List from "./List";
import FormDesign from "./FormDesign";

class WebDesine extends Component {
    constructor() {
        super();
        this.state = {
            isShow: false,
            isShowMobile: false,
        }
        this.formAddAndDelete = this.formAddAndDelete.bind(this);
        this.formAddMobile = this.formAddMobile.bind(this);
    }
    formAddAndDelete() {
        const { isShow } = this.state;
        this.setState({
            isShow: !isShow,
        })
    }
    formAddMobile() {
        const { isShowMobile } = this.state;
        this.setState({
            isShowMobile: !isShowMobile,
        })
    }
    render() {
        return(
            <>
                <Bunner />
                <StartPageWeb
                    propsFunction={ this.formAddAndDelete }
                    stateState={ this.state.isShow }
                />
                <ProcessDevDesign />
                <MobileDesign
                    propsFunctionMobile={ this.formAddMobile }
                    stateStateMobile={ this.state.isShowMobile }
                />
                <Main />
                <List />
                <FormDesign />
            </>
        );
    }
}
export default WebDesine;