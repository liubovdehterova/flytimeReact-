import React, { Component } from 'react'
import Buner from "./Buner";
import BusinessCardCall from "./BusinessCardCall";
import TypeBusinessCardPages from "./TypeBusinessCardPages";
import TypesCreateBusinessCardPage from "./TypesCreateBusinessCardPage";
import QuetionsBusinessCard from "./QuetionsBusinessCard";
import FormCorporation from "../CorporationCreateSite/FormCorporation";

class BusinessCardWebsite extends Component {
    constructor() {
        super();
        this.state = {
            isShow: false,
            isShowOther: false,
        }
        this.businessCardCall = this.businessCardCall.bind(this);
        this.businessCardCallOther = this.businessCardCallOther.bind(this);
    }
    businessCardCall() {
        const { isShow } = this.state;
        this.setState({
            isShow: !isShow
        })
    }
    businessCardCallOther() {
        const { isShowOther } = this.state;
        this.setState({
            isShowOther: !isShowOther
        })
    }
    render() {
        return(
            <>
                <Buner />
                <BusinessCardCall
                    propsBusinessCard={ this.businessCardCall }
                    stateBusinessCard={ this.state.isShow }
                />
                <TypeBusinessCardPages />
                <TypesCreateBusinessCardPage
                    propsBusinessCardOther={ this.businessCardCallOther }
                    stateBusinessCardOther={ this.state.isShowOther }
                />
                <QuetionsBusinessCard />
                <FormCorporation />
            </>
        )
    }
}
export default BusinessCardWebsite;