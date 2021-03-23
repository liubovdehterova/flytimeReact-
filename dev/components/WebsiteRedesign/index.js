import React, { Component } from 'react';

import Buner from './Buner';
import StartPageImprovement from './StartPageRedesign';
import WhatRedesign from './WhatRedesign'
import FromImprovement from './FormImprovement';
import WorkRedesign from './WorkRedesign';
import TypesRedesign from './TypesRedesign';
import MainSteps from './MainSteps'

class WebsiteRedesign extends Component {
    constructor() {
        super();
        this.state = {
            isShow: false,
            isShowNew: false,
        }
        this.formRedesign = this.formRedesign.bind(this);
        this.formWorkRedesign = this.formWorkRedesign.bind(this);
    }
    formRedesign() {
        const { isShow } = this.state;
        this.setState({
            isShow: !isShow,
        })
    }
    formWorkRedesign() {
        const { isShowNew } = this.state;
        this.setState({
            isShowNew: !isShowNew,
        })
    }
    render() {
        return(
            <>
                <Buner />
                <StartPageImprovement
                    propsFunctionRedesign={ this.formRedesign }
                    stateFunctionRedesign={ this.state.isShow }
                />
                <WhatRedesign />
                <WorkRedesign
                    propsFunctionWorkRedesign={ this.formWorkRedesign }
                    stateFunctionWorkRedesign={ this.state.isShowNew }
                />
                <TypesRedesign />
                <MainSteps />
                <FromImprovement />
            </>

        )
    }
}
export default WebsiteRedesign;