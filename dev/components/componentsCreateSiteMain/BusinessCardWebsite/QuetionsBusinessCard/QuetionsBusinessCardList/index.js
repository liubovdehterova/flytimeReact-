import React, { Component } from 'react'

class QuetionsBusinessCardList extends Component {
    render() {
        return(
            <ul className="ask__store__list">
                <li className="ask__store__list__inner">
                    <h2 className="ask__store__list__inner__title">
                        Что такое Сайт визитка?
                    </h2>
                    <p className="ask__store__list__inner__description">
                        Сайт визитка содержит как правило до 5 информационных страниц и подходит для частных лиц или небольших компаний.
                        Задача сайта информировать о роде деятельности и виде предоставляемых услуг, получить заявки от заинтересованных в сотрудничестве пользователей.
                    </p>
                </li>
                <li className="ask__store__list__inner">
                    <h2 className="ask__store__list__inner__title">
                        Какая цена и сроки на создание Сайта визитки?
                    </h2>
                    <p className="ask__store__list__inner__description">
                        Бюджет и сроки на разработку Сайта визитки определяется требованиями по уровню дизайна страниц, количеством страниц и объемом информации.
                    </p>
                </li>
                <li className="ask__store__list__inner">
                    <h2 className="ask__store__list__inner__title">
                        Что лучше Сайт визитка или Landing Page?
                    </h2>
                    <p className="ask__store__list__inner__description">
                        Если вы активно продвигаете определенную услугу или продукт и ваша задача получить как можно больше откликов с рекламы через сайт, в таком случае лучше создавать Landing Page.
                        Если услуг/продуктов/направлений несколько и объем информации достаточно большой для одной страницы, тогда лучше разработать сайт визитку.
                    </p>
                </li>
            </ul>
        )
    }
}
export default QuetionsBusinessCardList;