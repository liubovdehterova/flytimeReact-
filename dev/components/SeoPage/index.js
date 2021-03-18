import React, { Component } from 'react';

import Bunner from './Bunner';
import SeoInfoCall from './SeoInfoCall';
import FactorsSeo from './FactorsSeo';
import Services from "./Services";

class SeoPage extends Component {
    constructor() {
        super();
        this.state = {
            isShow: false,
            isShowSer: false,
        };
        this.deleteAndAdd = this.deleteAndAdd.bind(this);
        this.deleteAndAddService = this.deleteAndAddService.bind(this);
    }
    deleteAndAdd() {
        const { isShow } = this.state;
        this.setState({
            isShow: !isShow,
        });
    }
    deleteAndAddService() {
        const { isShowSer } = this.state;
        this.setState({
            isShowSer: !isShowSer,
        });
    }
    render() {
        return(
            <>
                <Bunner />
                <SeoInfoCall
                    propsFunction={ this.deleteAndAdd }
                    stateState={ this.state.isShow }
                />
                <FactorsSeo />
                <Services
                    propsFunctionSer={ this.deleteAndAddService }
                    stateStateSer={ this.state.isShowSer }
                />
            </>

        )
    }
}

export default SeoPage;