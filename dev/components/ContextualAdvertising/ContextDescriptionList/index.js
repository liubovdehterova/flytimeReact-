import React, { Component } from 'react';


class ContextDescriptionList extends Component {
    render() {
        return(
            <ul className="context__list">
                <li className="context__list__inner context__list__inner-traffic">
                    <h4 className="context__list__inner__title">
                        Проводим гиперсегментацию трафика
                    </h4>
                    <p className="context__list__inner__text">
                        и поднимаем продажи.
                    </p>
                </li>
                <li className="context__list__inner context__list__inner-speed">
                    <h4 className="context__list__inner__title">
                        Настраиваем ваш сайт
                    </h4>
                    <p className="context__list__inner__text">
                        для повышения конверсии.
                    </p>
                </li>
                <li className="context__list__inner context__list__inner-call">
                    <h4 className="context__list__inner__title">
                        Устанавливаем дополнительные каналы
                    </h4>
                    <p className="context__list__inner__text">
                        для связи с клиентом 24/7.
                    </p>
                </li>
                <li className="context__list__inner context__list__inner-return">
                    <h4 className="context__list__inner__title">
                        Настраиваем сценарии ремаркетинга
                    </h4>
                    <p className="context__list__inner__text">
                        для возврата пользователей на сайт на разных уровнях воронки продаж.
                    </p>
                </li>
                <li className="context__list__inner context__list__inner-economic">
                    <h4 className="context__list__inner__title">
                        Экономим рекламный бюджет
                    </h4>
                    <p className="context__list__inner__text">
                        и повышаем точность показа объявлений с помощью грамотного подбора минус-слов и кросс-минусовки.
                    </p>
                </li>
                <li className="context__list__inner context__list__inner-pie-chart">
                    <h4 className="context__list__inner__title">
                        Учитываем сезонность бизнеса
                    </h4>
                    <p className="context__list__inner__text">
                        что позволяет оптимизировать окупаемость инвестиций на рекламу.
                    </p>
                </li>
                <li className="context__list__inner context__list__inner-meeting">
                    <h4 className="context__list__inner__title">
                        Проводим корректировку дневного бюджета и ставок
                    </h4>
                    <p className="context__list__inner__text">
                        до 40 раз в сутки.
                    </p>
                </li>
                <li className="context__list__inner context__list__inner-testing">
                    <h4 className="context__list__inner__title">
                        Проводим А/Б-тестирование
                    </h4>
                    <p className="context__list__inner__text">
                        и выявляем наиболее конверсионные объявления, заголовки, элементы страницы.
                    </p>
                </li>
            </ul>
        );
    }
}
export default ContextDescriptionList;