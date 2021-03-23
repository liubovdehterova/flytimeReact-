import React, { Component } from 'react';

import WhatInfluencesOnPriceList from './WhatInfluencesOnPriceList'

class WhatInfluencesOnPrice extends Component {
    render() {
        return(
            <div className="ask__improvement ask__analytics">
                <h1 className="ask__improvement__title">
                    Что влияет на стоимость настройки аналитики для сайта?
                </h1>
                <WhatInfluencesOnPriceList />
            </div>
        )
    }
}
export default WhatInfluencesOnPrice;