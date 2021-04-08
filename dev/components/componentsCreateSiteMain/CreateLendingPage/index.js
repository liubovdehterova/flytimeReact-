import React, { Component } from 'react'

import Buner from "./Buner";
import LendingCreateCall from "./LendingCreateCall";
import TypesLendingPages from "./TypesLendingPages";
import TypesCreateLendingPage from "./TypesCreateLendingPage";
import QuetionsLanding from "./QuetionsLanding";
import FormCorporation from "../CorporationCreateSite/FormCorporation";

class CreateLendingPage extends Component {
    constructor() {
        super();
        this.state = {
            isShow: false,
            isShowOther: false
        }
        this.LendingCall = this.LendingCall.bind(this);
        this.TypesLendingCall = this.TypesLendingCall.bind(this);
    }
    LendingCall() {
        const { isShow } = this.state;
        this.setState({
            isShow: !isShow
        })
    }
    TypesLendingCall() {
        const { isShowOther } = this.state;
        this.setState({
            isShowOther: !isShowOther
        })
    }
    render() {
        return(
            <>
                <Buner />
                <LendingCreateCall
                    functionLendingCall={ this.LendingCall }
                    StateLendingCall={ this.state.isShow }
                />
                <TypesLendingPages />
                <TypesCreateLendingPage
                    functionTypesLendingCall={ this.TypesLendingCall }
                    stateTypesLendingCall={ this.state.isShowOther }
                />
                <QuetionsLanding />
                <FormCorporation />
            </>
        )
    }
}
export default CreateLendingPage;