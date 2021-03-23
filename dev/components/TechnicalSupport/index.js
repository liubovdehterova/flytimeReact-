import React, { Component } from 'react';

import Buner from './Buner';
import TechnicalDescription from './TechnicalDescription';
import TechnicalWork from './TechnicalWork';
import Advantage from './Advantage'
import FormTechnical from './FormTechnical'

class TechnicalSupport extends Component {
    constructor() {
        super();
        this.state = {
            isShow: false,
        }
        this.formAddAndDelete = this.formAddAndDelete.bind(this);
    }
    formAddAndDelete() {
        const { isShow } = this.state;
        this.setState({
            isShow: !isShow,
        })
    }
    render() {
        return(
            <>
                <Buner />
                <TechnicalDescription
                    propsTechnicalSupport={ this.formAddAndDelete }
                    stateTechnicalSupport={ this.state.isShow }
                />
                <TechnicalWork />
                <Advantage />
                <FormTechnical />
            </>

        )
    }
}
export default TechnicalSupport;