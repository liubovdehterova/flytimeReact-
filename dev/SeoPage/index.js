import React, { Component } from 'react';

import Bunner from './Bunner';
import SeoInfoCall from './SeoInfoCall';

class SeoPage extends Component {
    constructor() {
        super();
        this.state = {
            isShow: false,
        };
        this.deleteAndAdd = this.deleteAndAdd.bind(this);
    }
    deleteAndAdd() {
        const { isShow } = this.state;
        this.setState({
            isShow: !isShow,
        });
    }
    render() {
        return(
            <>
                <Bunner />
                <SeoInfoCall
                    propsFunction={ this.deleteAndAdd }
                    stateState={ this.state.isShow }
                />
            </>

        )
    }
}

export default SeoPage;