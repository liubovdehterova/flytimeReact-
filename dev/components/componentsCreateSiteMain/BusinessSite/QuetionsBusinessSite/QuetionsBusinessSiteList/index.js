import React, { Component } from 'react'

class QuetionsBusinessSiteList extends Component {
    render() {
        return(
            <ul className="ask__store__list">
                <li className="ask__store__list__inner">
                    <h2 className="ask__store__list__inner__title">
                        Что такое Бизнес сайт?
                    </h2>
                    <p className="ask__store__list__inner__description">
                        Бизнес сайт это многостраничный сайт, который подходит малому и среднему бизнесу.
                        Его задача заключается в формировании имиджа компании в онлайн среде,
                        предоставления информации об услугах и возможностях компании, привлечении новых клиентов и партнеров.
                    </p>
                </li>
                <li className="ask__store__list__inner">
                    <h2 className="ask__store__list__inner__title">
                        Какая цена и сроки на создание Бизнес сайта?
                    </h2>
                    <p className="ask__store__list__inner__description">
                        Бюджет и сроки на разработку Бизнес сайта определяется несколькими этапами работ.
                        Прежде всего это анализ рынка, построение структуры разделов,
                        формирование позиционирования. Затем этап UI/UX дизайна, и этап программирования.
                    </p>
                </li>
                <li className="ask__store__list__inner">
                    <h2 className="ask__store__list__inner__title">
                        В чем разница между Корпоративным и Бизнес сайтом?
                    </h2>
                    <p className="ask__store__list__inner__description">
                        Бизнес сайты как правило проще по структуре и меньше по количеству страниц,
                        не содержат внутренних разделов для зарегистрированных пользователей.
                        Такие сайты подходят для малого и среднего бизнеса.
                        Корпоративные сайты имеют довольно объемную структуру с несколькими вложенностями и предназначены для среднего и крупного бизнеса.
                    </p>
                </li>
            </ul>
        )
    }
}
export default QuetionsBusinessSiteList;