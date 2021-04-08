import React, { Component } from 'react';
import CallUs from "./CallUs";

class CorporitionWebSiteCall extends Component {
    render() {
        const { propsAdeptDesignCall, stateAdeptDesignCall } = this.props;
        return (
            <div className='description'>
                <div className='description__info'>
                    <h1 className='description__info__title'>
                        Представительство компании в интернете
                    </h1>
                    <p className='description__info__text'>
                        Продуманный дизайн корпоративного сайта поможет выгодно подать клиентам ваши преимущества, продемонстрирует солидность, повысит имидж.
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
export default CorporitionWebSiteCall;