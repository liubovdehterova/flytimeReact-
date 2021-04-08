import React, { Component } from 'react'

class QuetionsLandingList extends Component {
    render() {
        return(
            <ul className="ask__store__list">
                <li className="ask__store__list__inner">
                    <h2 className="ask__store__list__inner__title">
                        Что лучше Landing page или многостраничный сайт?
                    </h2>
                    <p className="ask__store__list__inner__description">
                        Если вы продвигаете отдельный товар/услугу,
                        лучше разрабатывать Landing page, т.к. все внимание пользователя сосредоточится именно на конкретном
                        товаре/услуге и он с большей вероятностью совершит нужное целевое действие.
                    </p>
                </li>
                <li className="ask__store__list__inner">
                    <h2 className="ask__store__list__inner__title">
                        Какая цена на создание Landing page?
                    </h2>
                    <p className="ask__store__list__inner__description">
                        Бюджет на разработку Landing page определяется несколькими этапами работ.
                        Прежде всего это анализ рынка, построение структуры страницы, формирование контента. Затем этап UI/UX дизайна, и этап программирования.
                    </p>
                </li>
                <li className="ask__store__list__inner">
                    <h2 className="ask__store__list__inner__title">
                        Какой срок создания Landing page?
                    </h2>
                    <p className="ask__store__list__inner__description">
                        Сроки зависят от уровня дизайна и от количества экранов (смысловых блоков) на странице.
                        В среднем на создание качественного и стильного Landing page уходит от 2х до 5 недель.
                    </p>
                </li>
            </ul>
        )
    }
}
export default QuetionsLandingList;