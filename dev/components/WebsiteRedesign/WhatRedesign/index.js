import React, { Component } from 'react';

import WhatRedesignList from './WhatRedesignList'

class WhatRedesign extends Component {
    render() {
        return(
            <div className="ask__improvement">
                <h1 className="ask__improvement__title">
                    Что такое редизайн сайта и какие задачи он включает?
                </h1>
                <p className="ask__improvement__description">
                    Исходя из требований заказчика редизайн веб сайта включает в себя разные пункты:
                </p>
                <WhatRedesignList />
                <p className="ask__improvement__description">
                    Редизайн сайта – не просто изменение оформления.
                    Он также предусматривает серьезные правки в контенте и функциональности веб-ресурса. Вплоть до переезда площадки на другой движок.
                </p>
            </div>
        )
    }
}
export default WhatRedesign;