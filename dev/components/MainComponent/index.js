import React, { Component } from 'react';

import Buner from './Buner';
import Main from './Main';
import Communication from './Communication';

class MainComponent extends Component {
    constructor() {
        super();
        this.state = {
            isShow: false,
        };
        this.clearUseInteresting = this.clearUseInteresting.bind(this);
    }
    clearUseInteresting() {
        const { isShow } = this.state;
        this.setState({
            isShow: !isShow,
        });
    }
    render() {
        return (
            <div id="start__page">
                <Buner />
                <Main />
                <Communication
                    addPropsForm={this.clearUseInteresting }
                    addPropsState={this.state.isShow}
                />
            </div>
        );
    }
}
export default MainComponent;