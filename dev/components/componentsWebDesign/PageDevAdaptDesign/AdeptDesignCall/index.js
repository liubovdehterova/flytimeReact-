import React, { Component } from 'react';
import CallUs from "./CallUs";

class BusinessSiteCall extends Component {
    render() {
        const { propsbusinessSiteCall, statebusinessSiteCall } = this.props;
        return (
            <div className='description'>
                <div className='description__info'>
                    <h1 className='description__info__title'>
                        Бизнес сайт, крутые идеи для вашего бренда
                    </h1>
                    <p className='description__info__text'>
                        Сегодня сложно представить компанию без сайта. Одним из важных факторов формирования мнения о бренде,
                        является не только наличие сайта, но и его состояние.
                        Когда клиенты сравнивают вас с конкурентами, у них не должно оставаться сомнений o лидерстве вашей компании на рынке.
                    </p>
                    <p className='description__info__text'>
                        Мы обновляем старые и создаем новые сайты, которые усиливают позиции и выделяют вашу компанию среди конкурентов
                    </p>
                </div>
                <div className='description__buttons'>
                    <button
                        className='block__call__information__link block__call__link__inner'
                        onClick={ propsbusinessSiteCall }
                    >
                        Узнать стоимость
                    </button>
                    {
                        statebusinessSiteCall ? <CallUs
                            propsBusinessSitedCall={ propsbusinessSiteCall }
                            stateBusinessSiteCall={ statebusinessSiteCall }
                        /> : null
                    }
                </div>
            </div>
        );
    }
}
export default BusinessSiteCall;