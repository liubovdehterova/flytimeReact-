import React, { Component } from 'react';

import WorkOnlineStoreList from './WorkOnlineStoreList'
import CallUs from "./CallUs";

class WorkCorporationSite extends Component {
    render() {
        const { propsCorporationSite, stateCorporationSite} = this.props;
        return(
            <div className="ask__improvement ask__improvement-other ask__improvement-other__item">
                <h1 className="ask__improvement__title ask__improvement__title-other">
                    Процесс создания корпоративного сайта
                </h1>

                <WorkOnlineStoreList />
                <div className="context__call__other">
                    <button className="block__call__information__link block__call__link__inner"
                            onClick={ propsCorporationSite }
                    >
                        Обсудить проект
                    </button>
                    {
                        stateCorporationSite ? <CallUs
                            propsDeleteFunctionCorporationSite={ propsCorporationSite }
                            propsDeleteStateCorporationSite={ stateCorporationSite }
                        /> : null
                    }
                </div>
            </div>
        )
    }
}
export default WorkCorporationSite;