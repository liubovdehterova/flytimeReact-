import React, { Component } from 'react';

import TitleDev from "./TitleDev";
import BodyPriceShop from "./BodyPriceShop";
import BodyCreateCorporation from "./BodyCreateCorporation";
import BodyCreateBusiness from "./BodyCreateBusiness";


class PriceAnalyticsOption extends Component {
    render() {
        const {
            createSiteFormPropsFunc,
            createSiteFormPropsState,
            propsCorporation,
            propsCorporationState,
            propsBusiness,
            propsBusinessState,
        } = this.props;
        return(
            <>
                <TitleDev />
                <div className="price">
                    <BodyPriceShop
                        id="01"
                        price="$150"
                        name="Базовый старт"
                        idPrice="shop"
                        propsOpenForm={ createSiteFormPropsFunc }
                        stateOpenForm={ createSiteFormPropsState }

                    />
                    <BodyCreateCorporation
                        id="02"
                        price="$300"
                        name="Оптимальный старт"
                        idPrice="corporation"
                        propsOpenFormCorporation={ propsCorporation }
                        stateOpenFormCorporation={ propsCorporationState }
                    />
                    <BodyCreateBusiness
                        id="03"
                        price="$750"
                        name="Максимальный старт"
                        idPrice="business"
                        propsOpenFormBusiness={ propsBusiness }
                        stateOpenFormBusiness={ propsBusinessState }
                    />
                </div>
            </>
        );
    }
}
export default PriceAnalyticsOption;