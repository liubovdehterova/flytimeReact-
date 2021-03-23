import React, { Component } from 'react';


class TechnicalWork extends Component {
    render() {
        return(
            <div className="work">
                <h1 className="work__title">
                    Как происходит техподдержка сайта
                </h1>
                <ul className="work__list">
                    <li className="work__list__inner work__list__inner__cons work__list__inner-bg">
                        Вы пишете, какую задачу техподдержки сайта вы хотите решить
                    </li>
                    <li className="work__list__inner work__list__inner__tech work__list__inner-bg">
                        Мы даем оценку выполнения задачи в часах и просим подтверждения чтобы вы понимали стоимость
                    </li>
                    <li className="work__list__inner work__list__inner__enter work__list__inner-bg">
                        Вы подтверждаете оценку, мы выполняем задачу
                    </li>
                    <li className="work__list__inner work__list__inner__advertising">
                        Мы формируем отчет о проделанной работе и ожидаем оплату за обслуживание интернет сайта (сервиса, магазина)
                    </li>
                </ul>
            </div>
        )
    }
}
export default TechnicalWork;