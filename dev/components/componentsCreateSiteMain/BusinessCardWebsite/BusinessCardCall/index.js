import React, { Component } from 'react';
import CallUs from "./CallUs";

class BusinessCardCall extends Component {
    render() {
        const { propsBusinessCard, stateBusinessCard } = this.props;
        return (
            <div className='description'>
                <div className='description__info'>
                    <h1 className='description__info__title'>
                        Заказать сайт визитку
                        Представить ваш бизнес в сети
                    </h1>
                    <p className='description__info__text'>
                        Разработка сайта-визитки,
                        как правило, происходит быстро благодаря малому количеству страниц.
                        Вы обсуждаете с нами тематику, утверждаете макет и в короткий срок получаете готовый ресурс.
                    </p>
                    <p className='description__info__text'>
                        Даже такой простой сайт, как визитка,
                        можно сделать интересным и нестандартным,
                        если подойти к разработке творчески.
                        Наша команда «живет» каждым проектом, поэтому мы не предлагаем банальных решений.
                    </p>
                </div>
                <div className='description__buttons'>
                    <button
                        className='block__call__information__link block__call__link__inner'
                        onClick={ propsBusinessCard }
                    >
                        Узнать стоимость
                    </button>
                    {
                        stateBusinessCard ? <CallUs
                            propsBusinessCardCall={ propsBusinessCard }
                            stateBusinessCardCall={ stateBusinessCard }
                        /> : null
                    }
                </div>
            </div>
        );
    }
}
export default BusinessCardCall;