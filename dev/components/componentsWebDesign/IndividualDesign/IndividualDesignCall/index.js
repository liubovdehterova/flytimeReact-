import React, { Component } from 'react';
import CallUs from "./CallUs";

class IndividualDesignCall extends Component {
    render() {
        const { propsIndividualDesignCall, stateIndividualDesignCall } = this.props;
        return (
            <div className='description'>
                <div className='description__info'>
                    <h1 className='description__info__title'>
                        Уникальный дизайн сайта - элемент имиджа компании
                    </h1>
                    <p className='description__info__text'>
                        Если вам нужен ресурс,
                        который будет привлекать новых клиентов,
                        поддерживать интерес завоёванной целевой аудитории,
                        повышать имидж компании в глазах покупателей,
                        закажите индивидуальный дизайн сайта.
                    </p>
                </div>
                <div className='description__buttons'>
                    <button
                        className='block__call__information__link block__call__link__inner'
                        onClick={ propsIndividualDesignCall }
                    >
                        Обсудить проект
                    </button>
                    {
                        stateIndividualDesignCall ? <CallUs
                            propsIndividualCall={ propsIndividualDesignCall }
                            stateIndividualCall={ stateIndividualDesignCall }
                        /> : null
                    }
                </div>
            </div>
        );
    }
}
export default IndividualDesignCall;