import React, { Component } from 'react';

import TitleDev from "./TitleDev";
import BodyPriceShop from "./BodyPriceShop";
import BodyCreateCorporation from "./BodyCreateCorporation";
import BodyCreateBusiness from "./BodyCreateBusiness";
import BodyCreateBusinessCard from "./BodyCreateBusinessCard";

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
        } = this.props;
        return(
            <>
                <TitleDev />
                <div className="price">
                    <BodyPriceShop
                        id="01"
                        price="$250"
                        name="Лендинг или сайт с одной/двумя услугами"
                        idPrice="shop"
                        propsOpenForm={ createSiteFormPropsFunc }
                        stateOpenForm={ createSiteFormPropsState }

                    />
                    <BodyCreateCorporation
                        id="02"
                        price="$300"
                        name="Интернет магазин с одним или двумя категориями"
                        idPrice="corporation"
                        propsOpenFormCorporation={ propsCorporation }
                        stateOpenFormCorporation={ propsCorporationState }
                    />
                    <BodyCreateBusiness
                        id="03"
                        price="$450"
                        name="Портал, сайт и интернет магазин с множеством категорий и услуг"
                        idPrice="business"
                        propsOpenFormBusiness={ propsBusiness }
                        stateOpenFormBusiness={ propsBusinessState }
                    />
                    <BodyCreateBusinessCard
                        id="04"
                        price="$15"
                        name="По открытому бюджету"
                        idPrice="businessCard"
                        propsOpenBusinessCard={ propsBusinessCard }
                        stateOpenBusinessCard={ propsBusinessCardState }
                    />
                </div>
            </>
        );
    }
}
export default PriceCreateSite;