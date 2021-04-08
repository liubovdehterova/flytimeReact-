import React, { Component } from 'react';
import TypesCreateLendingPageList from "./TypesCreateLendingPageList";
import CallUs from "./CallUs";

class TypesCreateLendingPage extends Component {
    render() {
        const { functionTypesLendingCall, stateTypesLendingCall } = this.props;
        return(
            <div className="ask__improvement ask__improvement-other">
                <h1 className="ask__improvement__title">
                    Этапы создания Лендинга
                </h1>
                <TypesCreateLendingPageList />
                <div className="context__call__other">
                    <button className="block__call__information__link block__call__link__inner"
                            onClick={ functionTypesLendingCall }
                    >
                        Обсудить проект
                    </button>
                    {
                        stateTypesLendingCall ? <CallUs
                            propsDeleteTypesLending={ functionTypesLendingCall }
                            propsDeleteStateTypesLending={ stateTypesLendingCall }
                        /> : null
                    }
                </div>
            </div>
        )
    }
}
export default TypesCreateLendingPage;