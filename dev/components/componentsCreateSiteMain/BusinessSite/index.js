import React, { Component } from 'react'

import Buner from "./Buner";
import BusinessSiteCall from './BusinessSiteCall'
import TypeBusinessSitePages from "./TypeBusinessSitePages";
import TypesCreateBusinessSitePage from "./TypesCreateBusinessSitePage";
import QuetionsBusinessSite from './QuetionsBusinessSite'
import FormCorporation from "../CorporationCreateSite/FormCorporation";

class BusinessSite extends Component {
    constructor() {
        super();
        this.state = {
            isShow: false,
            isShowOther: false,
        }
        this.businessSiteCall = this.businessSiteCall.bind(this);
        this.businessSiteCallOther = this.businessSiteCallOther.bind(this);
    }
    businessSiteCall() {
        const { isShow } = this.state;
        this.setState({
            isShow: !isShow
        })
    }
    businessSiteCallOther() {
        const { isShowOther } = this.state;
        this.setState({
            isShowOther: !isShowOther
        })
    }
    render() {
        return(
            <>
                <Buner />
                <BusinessSiteCall
                    propsbusinessSiteCall={ this.businessSiteCall }
                    statebusinessSiteCall={ this.state.isShow }
                />
                <TypeBusinessSitePages />
                <TypesCreateBusinessSitePage
                    propsBusinessSiteOther={ this.businessSiteCallOther }
                    stateBusinessSiteOther={ this.state.isShowOther }
                />
                <QuetionsBusinessSite />
                <FormCorporation />
            </>
        )
    }
}
export default BusinessSite;