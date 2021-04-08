import React, { Component } from 'react'

import Buner from "./Buner";
import CorporationCreateCall from './CorporationCreateCall';
import TypesCorporationList from './TypesCorporationList';
import WorkCorporationSite from './WorkCorporationSite';
import ResultCorporation from './ResultCorporation';
import QuetionsCorporation from "./QuetionsCorporation";
import FormCorporation from './FormCorporation'

class CorporationCreateSite extends Component {
    constructor() {
        super();
        this.state = {
            isShow: false,
            isShowNew: false,
            isShowResult: false
        };
        this.clearCorporation = this.clearCorporation.bind(this);
        this.clearCorporationSite = this.clearCorporationSite.bind(this);
        this.clearCorporationResult = this.clearCorporationResult.bind(this);
    }
    clearCorporation() {
        const { isShow } = this.state;
        this.setState({
            isShow: !isShow,
        });
    }
    clearCorporationSite() {
        const { isShowNew } = this.state;
        this.setState({
            isShowNew: !isShowNew,
        });
    }
    clearCorporationResult() {
        const { isShowResult } = this.state;
        this.setState({
            isShowResult: !isShowResult,
        });
    }
    render() {
        return(
            <>
                <Buner />
                <CorporationCreateCall
                    propsDeleteCorporation={ this.clearCorporation }
                    propsDeleteStateCorporation={ this.state.isShow }
                />
                <TypesCorporationList />
                <WorkCorporationSite
                    propsCorporationSite={ this.clearCorporationSite }
                    stateCorporationSite={ this.state.isShowNew  }
                />
                <ResultCorporation
                    propsCorporationResult={ this.clearCorporationResult }
                    stateCorporationResult={ this.state.isShowResult  }
                />
                <QuetionsCorporation />
                <FormCorporation />
            </>
        )
    }
}

export default CorporationCreateSite;