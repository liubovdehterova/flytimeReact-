import React, { Component } from 'react';

import Buner from './Bunner';
import BlockInformation from "./BlockInformation";
import BlockInformationList from "./BlockInformationList";
import CreateSiteCommunication from "./CreateSiteCommunication";
import DevelopmentStagers from "./DevelopmentStagers";

class CreateSite extends Component {
    constructor() {
        super();
        this.state = {
            isShow: false,
            isShowNow: false
        };
        this.clearUseInteresting = this.clearUseInteresting.bind(this);
        this.clearUseInterestingSite = this.clearUseInterestingSite.bind(this);
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
            </>

        )
    }
}

export default CreateSite;