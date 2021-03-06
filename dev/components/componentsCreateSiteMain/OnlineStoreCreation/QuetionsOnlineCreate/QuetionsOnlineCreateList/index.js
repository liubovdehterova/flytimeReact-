import React, { Component } from 'react'

class QuetionsOnlineCreateList extends Component {
    render() {
        return(
            <ul className="ask__store__list">
                <li className="ask__store__list__inner">
                    <h2 className="ask__store__list__inner__title">
                        Сколько стоит создание интернет магазина?
                    </h2>
                    <p className="ask__store__list__inner__description">
                        Интернет-магазины отличаются друг от друга не только внешним видом, но и функциональностью.
                        Разработка индивидуальных инструментов, подключение платежных систем и других сторонних сервисов, разработка айдентики и фирменного стиля, маркетинг,
                        продвижение, оптимизация – все это влияет на цену. Оставьте заявку и наш менеджер поможет рассчитать предварительную стоимость вашего проекта.
                    </p>
                </li>
                <li className="ask__store__list__inner">
                    <h2 className="ask__store__list__inner__title">
                        Сколько времени занимает создание интернет магазина
                    </h2>
                    <p className="ask__store__list__inner__description">
                        Современные сайты должны стильно выглядеть и быть функциональными.
                        На разработку каждого этапа отводится время. Чем больше этапов, тем дольше делается сайт.
                        Иногда требуется больше времени, особенно, если делаются индивидуальные инструменты и функционал.
                        Оставьте заявку и наш менеджер поможет рассчитать время на разработку вашего проекта.
                    </p>
                </li>
                <li className="ask__store__list__inner">
                    <h2 className="ask__store__list__inner__title">
                        Делаете ли вы продвижение магазинов?
                    </h2>
                    <p className="ask__store__list__inner__description">
                        Да, мы не только занимаемся технической частью разработки, но и помогаем реализовать проект.
                        Специалисты проводят аналитику, изучают конкурентов, целевую аудиторию, особенности сферы бизнеса. Создается план и методы его реализации.
                        Внедряются инструменты для продвижения магазина и бренда. Это комплексная работа, от идеи до результата.
                    </p>
                </li>
            </ul>
        )
    }
}
export default QuetionsOnlineCreateList;