import React, { Component } from 'react';
import CallUs from "./CallUs";

class LendingCreateCall extends Component {
    render() {
        const { functionLendingCall, StateLendingCall } = this.props;
        return (
            <div className='description'>
                <div className='description__info'>
                    <h1 className='description__info__title'>
                        Нужен быстрый старт?
                        Заказать лендинг - лучшее решение
                    </h1>
                    <p className='description__info__text'>
                        Landing page - это одностраничная посадочная страница,
                        задача которой, побудить пользователя совершить целевое действие.
                        Такое действие может быть направлено на оформление заказа,
                        онлайн оплату или просто на получение данных потенциального клиента.
                    </p>
                    <p className='description__info__text'>
                        Мы занимаемся разработкой лендингов c высокой конверсией, с упором на дизайн и легкость восприятия информации пользователем.
                    </p>
                </div>
                <div className='description__buttons'>
                    <button
                        className='block__call__information__link block__call__link__inner'
                        onClick={ functionLendingCall }
                    >
                        Узнать стоимость
                    </button>
                    {
                        StateLendingCall ? <CallUs
                            propsLending={ functionLendingCall }
                            propsLendingState={ StateLendingCall }
                        /> : null
                    }
                </div>
            </div>
        );
    }
}
export default LendingCreateCall;