import React, { Component } from 'react';

import TitleDev from "./TitleDev";
import BodyPriceShop from "./BodyPriceShop";
import BodyCreateCorporation from "./BodyCreateCorporation";
import BodyCreateBusiness from "./BodyCreateBusiness";
import BodyCreateBusinessCard from "./BodyCreateBusinessCard";
import BodyCreateLanding from "./BodyCreateLanding";

class PriceCreateSite extends Component {

    render() {
        const {
            createSiteFormPropsFunc,
            createSiteFormPropsState,
            propsCorporation,
            propsCorporationState,
            propsBusiness,
            propsBusinessState,
            propsBusinessCard,
            propsBusinessCardState,
            propsLanding,
            propsLandingState
        } = this.props;
        return(
            <>
                <TitleDev />
                <div className="price">
                    <BodyPriceShop
                        id="01"
                        price="$2500"
                        name="Интернет магазин"
                        idPrice="shop"
                        propsOpenForm={ createSiteFormPropsFunc }
                        stateOpenForm={ createSiteFormPropsState }

                    />
                    <BodyCreateCorporation
                        id="02"
                        price="$2100"
                        name="Корпоративные сайты"
                        idPrice="corporation"
                        propsOpenFormCorporation={ propsCorporation }
                        stateOpenFormCorporation={ propsCorporationState }
                    />
                    <BodyCreateBusiness
                        id="03"
                        price="$2100"
                        name="Бизнес сайт"
                        idPrice="business"
                        propsOpenFormBusiness={ propsBusiness }
                        stateOpenFormBusiness={ propsBusinessState }
                    />
                    <BodyCreateBusinessCard
                        id="04"
                        price="$1350"
                        name="Сайт визитка"
                        idPrice="businessCard"
                        propsOpenBusinessCard={ propsBusinessCard }
                        stateOpenBusinessCard={ propsBusinessCardState }
                    />
                    <BodyCreateLanding
                        id="05"
                        price="$1350"
                        name="Landing page"
                        idPrice="Landing"
                        propsOpenFormLanding={ propsLanding }
                        stateOpenFormLanding={ propsLandingState }
                    />
                </div>
            </>
        );
    }
}
export default PriceCreateSite;