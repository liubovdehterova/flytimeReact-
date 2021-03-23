import React, { Component } from 'react';

import Buner from './Buner';
import StartPageImprovement from './StartPageImprovement'
import WhatImprovement from './WhatImprovement'
import AdditionalInformationImprovement from './AdditionalInformationImprovement'
import FromImprovement from './FormImprovement'
import WorkImprovement from "./WorkImprovement";

class WebsiteImprovement extends Component {
    constructor() {
        super();
        this.state = {
            isShow: false,
            isShowNew: false,
        }
        this.formImprovement = this.formImprovement.bind(this);
        this.formImprovementAdditional = this.formImprovementAdditional.bind(this);
    }
    formImprovement() {
        const { isShow } = this.state;
        this.setState({
            isShow: !isShow,
        })
    }
    formImprovementAdditional() {
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
                    propsFunctionImp={ this.formImprovement }
                    stateFunctionImp={ this.state.isShow }
                />
                <WhatImprovement />
                <AdditionalInformationImprovement
                    propsFunctionAdditional={ this.formImprovementAdditional }
                    stateFunctionAdditional={ this.state.isShowNew }
                />
                <WorkImprovement />
                <FromImprovement />
            </>

        )
    }
}
export default WebsiteImprovement;