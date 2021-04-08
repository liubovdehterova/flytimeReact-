import React, { Component } from 'react'

import Buner from "./Buner";
import AdeptDesignCall from "./AdeptDesignCall";
import TypesAdeptDesignPages from "./TypesAdeptDesignPages";
import FormCorporation from "./FormCorporation";

class PageDevAdaptDesign extends Component {
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
                <AdeptDesignCall
                    propsAdeptDesignCall={ this.adeptDesignCall }
                    stateAdeptDesignCall={ this.state.isShow }
                />
                <TypesAdeptDesignPages />
                <FormCorporation />
            </>
        )
    }
}
export default PageDevAdaptDesign;