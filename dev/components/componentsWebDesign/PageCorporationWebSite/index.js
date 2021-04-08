import React, { Component } from 'react'

import Buner from "./Buner";
import CorporitionWebSiteCall from "./CorporitionWebSiteCall";
import TypesAdeptDesignPages from "../PageDevAdaptDesign/TypesAdeptDesignPages";
import FormCorporation from "./FormCorporation";

class PageCorporationWebSite extends Component {
    constructor() {
        super();
        this.state = {
            isShow: false,
        }
        this.adeptDesignCall = this.adeptDesignCall.bind(this);
    }
    adeptDesignCall() {
        const { isShow } = this.state;
        this.setState({
            isShow: !isShow,
        })
    }
    render() {
        return(
            <>
                <Buner />
                <CorporitionWebSiteCall
                    propsAdeptDesignCall={ this.adeptDesignCall }
                    stateAdeptDesignCall={ this.state.isShow }
                />
                <TypesAdeptDesignPages />
                <FormCorporation />
            </>
        )
    }
}
export default PageCorporationWebSite;