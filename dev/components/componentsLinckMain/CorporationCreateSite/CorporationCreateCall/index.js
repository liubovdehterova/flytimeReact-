import React, { Component } from 'react';
import CallUs from "./CallUs";

class OnlineStoreInfoCall extends Component {
    render() {
        const { propsFunction, stateState } = this.props;
        return (
            <div className='description'>
                <div className='description__info'>
                    <h1 className='description__info__title'>
                        РАЗРАБОТКА И РАЗВИТИЕ ECOMMERCE-ПРОЕКТОВ
                    </h1>
                    <p className='description__info__text'>
                        Интернет-магазины помогают масштабировать бизнес, расширить целевую аудиторию и привлечь больше клиентов.
                        Это мощный инструмент для расширения возможностей компании.
                        Современные сайты выглядят просто, стильно, функционально.
                        Мы предлагаем комплексную разработку от идеи до запуска и поддержки.
                    </p>
                </div>
                <div className='description__buttons'>
                    <button
                        className='block__call__information__link block__call__link__inner'
                        onClick={ propsFunction }
                    >
                        Узнать стоимость
                    </button>
                    {
                        stateState ? <CallUs
                            propsDelete={ propsFunction }
                            propsDeleteState={ stateState }
                        /> : null
                    }
                </div>
            </div>
        );
    }
}
export default OnlineStoreInfoCall;