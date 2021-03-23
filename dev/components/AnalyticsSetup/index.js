import React, { Component } from 'react';

import Buner from './Buner'
import StartPageAnalytics from './StartPageAnalytics'
import TypesAnalytics from './TypesAnalytics'
import CustomizationAnalytics from "./CustomizationAnalytics";
import WhatInfluencesOnPrice from "./WhatInfluencesOnPrice";
import PriceAnalyticsOption from './PriceAnalyticsOption'

class AnalyticsSetup extends Component {
    constructor() {
        super();
        this.state={
            isShow: false,
            isShowNew: false,
            isShowCorporation:false,
            isShowBusiness: false,

        }
        this.analyticsForm = this.analyticsForm.bind(this);
        this.clearUseFormSite = this.clearUseFormSite.bind(this);
        this.clearUseFormSiteCorporation = this.clearUseFormSiteCorporation.bind(this);
        this.clearUseFormSiteBusiness = this.clearUseFormSiteBusiness.bind(this);
    }
    analyticsForm() {
        const { isShow } = this.state;
        this.setState({
            isShow: !isShow,
        })
    }
    clearUseFormSite() {
        const { isShowNew } = this.state;
        this.setState({
            isShowNew: !isShowNew,
        })
    }
    clearUseFormSiteCorporation() {
        const { isShowCorporation } = this.state;
        this.setState({
            isShowCorporation: !isShowCorporation,
        })
    }
    clearUseFormSiteBusiness() {
        const { isShowBusiness } = this.state;
        this.setState({
            isShowBusiness: !isShowBusiness,
        })
    }
    render() {
        return(
            <>
                <Buner />
                <StartPageAnalytics
                    propsFunctionAnalytics={ this.analyticsForm }
                    stateFunctionAnalytics={ this.state.isShow }
                />
                <TypesAnalytics />
                <CustomizationAnalytics />
                <WhatInfluencesOnPrice />
                <PriceAnalyticsOption
                    createSiteFormPropsFunc={ this.clearUseFormSite }
                    createSiteFormPropsState={ this.state.isShowNew }
                    propsCorporation={ this.clearUseFormSiteCorporation }
                    propsCorporationState={ this.state.isShowCorporation }
                    propsBusiness={ this.clearUseFormSiteBusiness }
                    propsBusinessState={ this.state.isShowBusiness }
                />
            </>
        );
    }
}
export default AnalyticsSetup;