import React, { Component } from 'react';
import TypesCreateBusinessSitePageList from "./TypesCreateBusinessSitePageList";
import CallUs from "./CallUs";

class TypesCreateBusinessSitePage extends Component {
    render() {
        const { propsBusinessSiteOther, stateBusinessSiteOther } = this.props;
        return(
            <div className="ask__improvement ask__improvement-other">
                <h1 className="ask__improvement__title">
                    Какие задачи решает Бизнес сайт?
                </h1>
                <TypesCreateBusinessSitePageList />
                <div className="context__call__other">
                    <button className="block__call__information__link block__call__link__inner"
                            onClick={ propsBusinessSiteOther }
                    >
                        Обсудить проект
                    </button>
                    {
                        stateBusinessSiteOther ? <CallUs
                            propsDeleteTypesBusinessSite={ propsBusinessSiteOther }
                            propsDeleteStateTypesBusinessSite={ stateBusinessSiteOther }
                        /> : null
                    }
                </div>
            </div>
        )
    }
}
export default TypesCreateBusinessSitePage;