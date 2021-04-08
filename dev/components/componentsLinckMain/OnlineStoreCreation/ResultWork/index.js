import React, { Component } from 'react';

import WorkOnlineStoreList from './WorkOnlineStoreList'
import CallUs from "./CallUs";

class WorkOnlineStore extends Component {
    render() {
        const { propsFunctionWorkRedesign, stateFunctionWorkRedesign} = this.props;
        return(
            <div className="ask__improvement ask__improvement-other">
                <h1 className="ask__improvement__title ask__improvement__title-other">
                    ЭТАПЫ РАЗРАБОТКИ
                </h1>

                <WorkOnlineStoreList />
                <div className="context__call__other">
                    <button className="block__call__information__link block__call__link__inner"
                            onClick={ propsFunctionWorkRedesign }
                    >
                        Обсудить проект
                    </button>
                    {
                        stateFunctionWorkRedesign ? <CallUs
                            propsDeleteFunctionWorkRedesign={ propsFunctionWorkRedesign }
                            propsDeleteStateWorkRedesign={ stateFunctionWorkRedesign }
                        /> : null
                    }
                </div>
            </div>
        )
    }
}
export default WorkOnlineStore;