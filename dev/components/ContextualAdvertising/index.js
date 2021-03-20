import React, { Component } from 'react'

import ContextDescription from './ContextDescription'
import Buner from './Buner'
import ContextDescriptionList from "./ContextDescriptionList";
import Stages from "./Stages";
import PriceContext from "./PriceContext";

class ContextualAdvertising extends Component {
    constructor() {
        super();
        this.state = {
            isShow: false,
            isShowNew: false,
            isShowLan: false,
            isShowSite: false,
            isShowShop: false,
            isShowOpen: false,
        }
        this.contextFormStart = this.contextFormStart.bind(this);
        this.clearContextFormSite = this.clearContextFormSite.bind(this);
        this.clearContextFormSiteCorporation = this.clearContextFormSiteCorporation.bind(this);
        this.clearContextFormSiteBusiness = this.clearContextFormSiteBusiness.bind(this);
        this.clearContextFormSiteBusinessCard = this.clearContextFormSiteBusinessCard.bind(this);
    }
    contextFormStart() {
        const { isShow } = this.state;
        this.setState({
            isShow: !isShow,
        })
    }
    clearContextFormSite() {
        const { isShowNew } = this.state;
        this.setState({
            isShowNew: !isShowNew,
        })
    }
    clearContextFormSiteCorporation() {
        const { isShowLan } = this.state;
        this.setState({
            isShowLan: !isShowLan,
        })
    }
    clearContextFormSiteBusiness() {
        const { isShowSite } = this.state;
        this.setState({
            isShowSite: !isShowSite,
        })
    }
    clearContextFormSiteBusinessCard() {
        const { isShowShop } = this.state;
        this.setState({
            isShowShop: !isShowShop,
        })
    }
    render() {
        return(
            <>
                <Buner />
                <ContextDescription
                    propsFunctionContext={ this.contextFormStart }
                    stateFunctionContext={ this.state.isShow }
                />
                <ContextDescriptionList />
                <Stages />
                <PriceContext
                    createSiteFormPropsFunc={ this.clearContextFormSite }
                    createSiteFormPropsState={ this.state.isShowNew }
                    propsCorporation={ this.clearContextFormSiteCorporation }
                    propsCorporationState={ this.state.isShowLan }
                    propsBusiness={ this.clearContextFormSiteBusiness }
                    propsBusinessState={ this.state.isShowSite }
                    propsBusinessCard={ this.clearContextFormSiteBusinessCard }
                    propsBusinessCardState={ this.state.isShowShop }
                />
            </>
        )
    }
}
export default ContextualAdvertising;