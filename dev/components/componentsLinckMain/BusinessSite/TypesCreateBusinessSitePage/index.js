import React, { Component } from 'react';
import TypesCreateLendingPageList from "./TypesCreateLendingPageList";
import CallUs from "./CallUs";

class TypesCreateBusinessCardPage extends Component {
    render() {
        const { propsBusinessCardOther, stateBusinessCardOther } = this.props;
        return(
            <div className="ask__improvement ask__improvement-other">
                <h1 className="ask__improvement__title">
                    Этапы создания сайта визитки
                </h1>
                <TypesCreateLendingPageList />
                <div className="context__call__other">
                    <button className="block__call__information__link block__call__link__inner"
                            onClick={ propsBusinessCardOther }
                    >
                        Обсудить проект
                    </button>
                    {
                        stateBusinessCardOther ? <CallUs
                            propsDeleteTypesLending={ propsBusinessCardOther }
                            propsDeleteStateTypesLending={ stateBusinessCardOther }
                        /> : null
                    }
                </div>
            </div>
        )
    }
}
export default TypesCreateBusinessCardPage;