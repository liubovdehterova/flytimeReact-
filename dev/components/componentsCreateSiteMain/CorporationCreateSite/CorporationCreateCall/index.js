import React, { Component } from 'react';
import CallUs from "./CallUs";

class CorporationCreateCall extends Component {
    render() {
        const { propsDeleteCorporation, propsDeleteStateCorporation } = this.props;
        return (
            <div className='description'>
                <div className='description__info'>
                    <h1 className='description__info__title'>
                        Разработка и развитие корпоративных web-сайтов
                    </h1>
                    <p className='description__info__text'>
                        Корпоративный сайт – это презентация компании в интернете.
                        Это онлайн представитель, помогающий привлекать новых клиентов,
                        укреплять существующие отношения с партнерами, повышать имидж.
                        Создание корпоративного сайта – это путь к масштабированию и улучшению деятельности компании.
                    </p>
                </div>
                <div className='description__buttons'>
                    <button
                        className='block__call__information__link block__call__link__inner'
                        onClick={ propsDeleteCorporation }
                    >
                        Узнать стоимость
                    </button>
                    {
                        propsDeleteStateCorporation ? <CallUs
                            propsCorporation={ propsDeleteCorporation }
                            propsCorporationState={ propsDeleteStateCorporation }
                        /> : null
                    }
                </div>
            </div>
        );
    }
}
export default CorporationCreateCall;