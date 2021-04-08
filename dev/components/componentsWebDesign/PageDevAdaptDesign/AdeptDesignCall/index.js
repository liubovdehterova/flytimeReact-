import React, { Component } from 'react';
import CallUs from "./CallUs";

class AdeptDesignCall extends Component {
    render() {
        const { propsAdeptDesignCall, stateAdeptDesignCall } = this.props;
        return (
            <div className='description'>
                <div className='description__info'>
                    <h1 className='description__info__title'>
                        Что такое адаптивный дизайн интернет-магазина?
                    </h1>
                    <p className='description__info__text'>
                        Это превращение потенциальной прибыли в реальную.
                        Продажа смартфонов давно обогнала по количеству планшеты и ноутбуки,
                        и многие для доступа в интернет используют мобильные версии устройств.
                        Хотите идти в ногу со временем? Значит, услуги адаптивного дизайна – именно то, что нужно.
                    </p>
                </div>
                <div className='description__buttons'>
                    <button
                        className='block__call__information__link block__call__link__inner'
                        onClick={ propsAdeptDesignCall }
                    >
                        Узнать стоимость
                    </button>
                    {
                        stateAdeptDesignCall ? <CallUs
                            propsAdepCall={ propsAdeptDesignCall }
                            stateAdepCall={ stateAdeptDesignCall }
                        /> : null
                    }
                </div>
            </div>
        );
    }
}
export default AdeptDesignCall;