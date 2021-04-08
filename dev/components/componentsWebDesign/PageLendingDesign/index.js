import React, { Component } from 'react';

import Buner from "./Buner";
import LendingDesignCall from "./LendingDesignCall";
import TypesLendingDesignPages from "./TypesLendingDesignPages";
import FormCorporation from "./FormCorporation";


class  PageLendingDesign extends Component {
    constructor() {
        super();
        this.state = {
            isShow: false,
        }
        this.lendingDesignCall = this.lendingDesignCall.bind(this);
    }
    lendingDesignCall() {
        const { isShow } = this.state;
        this.setState({
            isShow: !isShow,
        })
    }
    render() {
        return(
            <>
                <Buner />
                <LendingDesignCall
                    propsLendingDesignCall={ this.lendingDesignCall }
                    stateLendingDesignCall={ this.state.isShow }
                />
                <TypesLendingDesignPages />
                <FormCorporation />
            </>
        )
    }
}
export default PageLendingDesign;