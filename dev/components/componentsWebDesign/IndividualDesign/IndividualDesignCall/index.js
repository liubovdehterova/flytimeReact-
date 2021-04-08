import React, { Component } from 'react';
import CallUs from "./CallUs";

class LendingDesignCall extends Component {
    render() {
        const { propsLendingDesignCall, stateLendingDesignCall } = this.props;
        return (
            <div className='description'>
                <div className='description__info'>
                    <h1 className='description__info__title'>
                        Что такое дизайн Landing page?
                    </h1>
                    <p className='description__info__text'>
                        Это одностраничный сайт, который идеально подходит,
                        чтобы донести четко обозначенную мысль до аудитории.
                        В отличие от полноценного сайта, где много других разделов (о компании, продуктовые страницы, контакты, корзина и т. д.),
                        лендинг удерживает внимание посетителей строго на одном сообщении и должен вызывать желание выполнить определенное целевое действие.
                    </p>
                </div>
                <div className='description__buttons'>
                    <button
                        className='block__call__information__link block__call__link__inner'
                        onClick={ propsLendingDesignCall }
                    >
                        Узнать стоимость
                    </button>
                    {
                        stateLendingDesignCall ? <CallUs
                            propsLendingCall={ propsLendingDesignCall }
                            stateLendingCall={ stateLendingDesignCall }
                        /> : null
                    }
                </div>
            </div>
        );
    }
}
export default LendingDesignCall;