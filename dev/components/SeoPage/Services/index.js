import React, { Component } from 'react'
import CallUs from "./CallUs";

class Services extends Component {
    render() {
        const { propsFunctionSer, stateStateSer } = this.props;
        return(
            <div className='service'>
                <div className='service__inner'>
                    <h2 className='service__inner__title'>
                        Комплекс услуг по раскрутке сайта
                    </h2>
                    <p className='service__inner__text'>
                        Раскруткой сайта занимается команда профессионалов, которые знают актуальные требования поисковых систем к веб-ресурсам.
                    </p>
                    <p className='service__inner__list__title'>
                        К выполнению задачи мы подходим комплексно:
                    </p>
                    <ul className='service__inner__list'>
                        <li className='service__inner__list__info'>
                            анализируем поисковую выдачу и сайты конкурентов;
                        </li>
                        <li className='service__inner__list__info'>
                            разрабатываем индивидуальную стратегию;
                        </li>
                        <li className='service__inner__list__info'>
                            проводим работы по внутренней оптимизации;
                        </li>
                        <li className='service__inner__list__info'>
                            выполняем внешнее продвижение;
                        </li>
                        <li className='service__inner__list__info'>
                            работаем с web-аналитикой.
                        </li>
                    </ul>
                    <p className='service__inner__end'>
                        Мы обязательно прогнозируем результаты мероприятий и сроки их достижения для каждого сайта.
                    </p>
                </div>
                <div className='service__button'>
                    <button
                        className='service__button__item'
                        onClick={ propsFunctionSer }
                    >
                        Получить консультацию
                    </button>
                    {
                        stateStateSer ? <CallUs
                            propsDeleteSer={ propsFunctionSer }
                            propsDeleteStateSer={ stateStateSer }
                        /> : null
                    }
                </div>
            </div>
        );
    }
}
export default Services;