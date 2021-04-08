import React, { Component } from 'react';

import Buner from "./Buner";
import OnlineStoreInfoCall from './OnlineStoreInfoCall';
import TypesOnlineStorList from  './TypesOnlineStorList';
import WorkOnlineStore from './WorkOnlineStore';
import ResultWork from './ResultWork'
import QuetionsOnlineCreate from './QuetionsOnlineCreate';
import FormStore from './FormStore';

class OnlineStoreCreation extends Component {
    constructor() {
        super();
        this.state = {
            isShow: false,
            isShowNew: false,
            isShowResult: false,
        };
        this.clearFunctionStore = this.clearFunctionStore.bind(this);
        this.clearWorkOnlineStore = this.clearWorkOnlineStore.bind(this);
        this.clearResultWork = this.clearResultWork.bind(this);
    }
    clearFunctionStore() {
        const { isShow } = this.state;
        this.setState({
            isShow: !isShow,
        });
    }
    clearWorkOnlineStore() {
        const { isShowNew } = this.state;
        this.setState({
            isShowNew: !isShowNew,
        });
    }
    clearResultWork() {
        const { isShowResult } = this.state;
        this.setState({
            isShowResult: !isShowResult,
        });
    }
    render() {
        return(
            <>
                <Buner />
                <OnlineStoreInfoCall
                    propsFunction={ this.clearFunctionStore }
                    stateState={ this.state.isShow }
                />
                <TypesOnlineStorList />
                <WorkOnlineStore
                    propsFunctionWorkRedesign={ this.clearWorkOnlineStore  }
                    stateFunctionWorkRedesign={ this.state.isShowNew }
                />
                <ResultWork
                    propsResultWork={ this.clearResultWork  }
                    stateResultWork={ this.state.isShowResult }
                />
                <QuetionsOnlineCreate />
                <FormStore />
            </>
        )
    }
}
export default OnlineStoreCreation;