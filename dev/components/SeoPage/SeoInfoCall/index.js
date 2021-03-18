import React, { Component } from 'react';
import CallUs from "./CallUs";

class SeoInfoCall extends Component {
    render() {
        const { propsFunction, stateState } = this.props;
        return (
            <div className='description'>
                <div className='description__info'>
                    <h4 className='description__info__title'>
                        Расскрутка сайтов в поисковых системех
                    </h4>
                    <h1 className='description__info__title'>
                        SEO услуги
                    </h1>
                    <p className='description__info__text'>
                        Студия Fly Time предлагает профессиональные услуги по раскрутке сайтов.
                        SEO-специалисты обеспечат привлечение клиентов из поисковиков,
                        увеличивая тем самым продажи ваших товаров или услуг в интернете.
                        Мы сделаем все для того, чтобы каждый клиент остался доволен сотрудничеством с нами, в том числе и по стоимости услуг.
                    </p>
                    <div className="description__info__item">
                        <div className='description__info__item-inner'>
                            <h3 className='description__info__item-inner__title'>
                                Анализ
                            </h3>
                            <p className='description__info__item-inner__text'>
                                Анализируем конкурентов, нишу, запросы целевой аудитории
                            </p>
                        </div>
                        <div className='description__info__item-inner'>
                            <h3 className='description__info__item-inner__title'>
                                Аудит сайта
                            </h3>
                            <p className='description__info__item-inner__text'>
                                Проводит технический и внутренний аудит сайта
                            </p>
                        </div>
                        <div className='description__info__item-inner'>
                            <h3 className='description__info__item-inner__title'>
                                Стратегия
                            </h3>
                            <p className='description__info__item-inner__text'>
                                Формируем индивидуальный план действий по продвижению сайта
                            </p>
                        </div>
                    </div>
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
export default SeoInfoCall;