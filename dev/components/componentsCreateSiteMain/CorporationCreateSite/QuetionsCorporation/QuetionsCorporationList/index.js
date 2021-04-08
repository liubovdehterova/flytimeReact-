import React, { Component } from 'react'

class QuetionsOnlineCreateList extends Component {
    render() {
        return(
            <ul className="ask__store__list">
                <li className="ask__store__list__inner">
                    <h2 className="ask__store__list__inner__title">
                        Что такое корпоративный сайт?
                    </h2>
                    <p className="ask__store__list__inner__description">
                        Это ресурс, который является презентацией компании в интернете.
                        Основная цель – привлечь новых клиентов, ознакомить их с брендом и укрепить взаимоотношения с имеющимися партнерами.
                        Современные сайты рассказывают о преимуществах, методах работы, услугах.
                        Они отвечают на многие вопросы, снимают возражения и помогают общаться с клиентами.
                    </p>
                </li>
                <li className="ask__store__list__inner">
                    <h2 className="ask__store__list__inner__title">
                        Зачем нужен корпоративный сайт?
                    </h2>
                    <p className="ask__store__list__inner__description">
                        Создание корпоративного сайта решает ряд задач:
                        формирует имидж компании, повышает лояльность клиентов, расширяет клиентскую базу, знакомит потенциальных партнеров и клиентов с брендом.
                        Привлекает сотрудников, объединяет их и формирует корпоративный дух. Помогает собрать обратную связь, чтобы подстраиваться под изменения рынка.
                    </p>
                </li>
                <li className="ask__store__list__inner">
                    <h2 className="ask__store__list__inner__title">
                        Сколько стоит сделать корпоративный сайт?
                    </h2>
                    <p className="ask__store__list__inner__description">
                        Все зависит от функционала и типа создания корпоративного сайта.
                        Простой вариант – сайт визитка для небольших компаний.
                        Каталоги и торговые площадки делать сложнее, они стоят дороже.
                        Индивидуальные инструменты, разработка фирменного стиля, наполнение, ведение – все это влияет на цену.
                        Оставьте заявку и наш менеджер поможет рассчитать предварительную стоимость вашего проекта.
                    </p>
                </li>
            </ul>
        )
    }
}
export default QuetionsOnlineCreateList;