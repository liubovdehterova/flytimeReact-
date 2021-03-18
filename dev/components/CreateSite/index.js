import React, { Component } from 'react';

import Buner from './Bunner';
import BlockInformation from "./BlockInformation";
import BlockInformationList from "./BlockInformationList";
import CreateSiteCommunication from "./CreateSiteCommunication";
import DevelopmentStagers from "./DevelopmentStagers";
import InformationUser from "./InformationUser";
import PriceCreateSite from "./PriceCreateSite";

class CreateSite extends Component {
    constructor() {
        super();
        this.state = {
            isShow: false,
            isShowNow: false,
            isShowNew: false,
            isShowCorporation: false,
            isShowBusiness: false,
            isShowBusinessCard: false,
            isShowLanding: false
        };
        this.clearUseInteresting = this.clearUseInteresting.bind(this);
        this.clearUseInterestingSite = this.clearUseInterestingSite.bind(this);
        this.clearUseFormSite = this.clearUseFormSite.bind(this);
        this.clearUseFormSiteCorporation = this.clearUseFormSiteCorporation.bind(this);
        this.clearUseFormSiteBusiness = this.clearUseFormSiteBusiness.bind(this);
        this.clearUseFormSiteBusinessCard = this.clearUseFormSiteBusinessCard.bind(this);
        this.clearUseFormSiteLanding = this.clearUseFormSiteLanding.bind(this);
    }
    clearUseInteresting() {
        const { isShow } = this.state;
        this.setState({
            isShow: !isShow,
        });
    }
    clearUseInterestingSite() {
        const { isShowNow } = this.state;
        this.setState({
            isShowNow: !isShowNow,
        });
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
    clearUseFormSiteBusinessCard() {
        const { isShowBusinessCard } = this.state;
        this.setState({
            isShowBusinessCard: !isShowBusinessCard,
        })
    }
    clearUseFormSiteLanding() {
        const { isShowLanding } = this.state;
        this.setState({
            isShowLanding: !isShowLanding,
        })
    }

    render() {
        return(
            <>
                <Buner />
                <BlockInformation
                    formSiteFunction={ this.clearUseInteresting }
                    formSiteState={ this.state.isShow }
                />
                <BlockInformationList />
                <CreateSiteCommunication
                    formSiteFunctionSite={ this.clearUseInterestingSite }
                    formSiteStateSite={ this.state.isShowNow }
                />
                <DevelopmentStagers />
                <InformationUser />
                <PriceCreateSite
                    createSiteFormPropsFunc={ this.clearUseFormSite }
                    createSiteFormPropsState={ this.state.isShowNew }
                    propsCorporation={ this.clearUseFormSiteCorporation }
                    propsCorporationState={ this.state.isShowCorporation }
                    propsBusiness={ this.clearUseFormSiteBusiness }
                    propsBusinessState={ this.state.isShowBusiness }
                    propsBusinessCard={ this.clearUseFormSiteBusinessCard }
                    propsBusinessCardState={ this.state.isShowBusinessCard }
                    propsLanding={ this.clearUseFormSiteLanding }
                    propsLandingState={ this.state.isShowLanding }
                />
            </>

        )
    }
}

export default CreateSite;