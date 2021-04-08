import React, { Component } from 'react';

import Buner from "./Buner";
import IndividualDesignCall from "./IndividualDesignCall";
import TypesIndividualDesignPages from "./TypesIndividualDesignPages";
import FormCorporation from "./FormCorporation";


class  IndividualDesign extends Component {
    constructor() {
        super();
        this.state = {
            isShow: false,
        }
        this.individualDesignCall = this.individualDesignCall.bind(this);
    }
    individualDesignCall() {
        const { isShow } = this.state;
        this.setState({
            isShow: !isShow,
        })
    }
    render() {
        return(
            <>
                <Buner />
                <IndividualDesignCall
                    propsIndividualDesignCall={ this.individualDesignCall }
                    stateIndividualDesignCall={ this.state.isShow }
                />
                <TypesIndividualDesignPages />
                <FormCorporation />
            </>
        )
    }
}
export default IndividualDesign;