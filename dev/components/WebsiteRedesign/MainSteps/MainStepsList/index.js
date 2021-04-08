import React, { Component } from 'react';

class MainStepsList extends Component {
    render() {
        return(
            <ul className="ask__improvement__list ask__improvement__list-other">
                <li className="ask__improvement__list__inner ask__improvement__list__inner-redesign">
                    <div className="ask__improvement__list__inner-item">
                        1.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <p className="ask__improvement__list__inner-item__text ask__improvement__list__inner-item__text-other">
                            Разработка концепции. На данном этапе анализируются топовые сайты и изучаются основные решения,
                            которые помогают сделать веб-ресурс удобным и интуитивно понятным для пользователей.
                        </p>
                    </div>
                </li>
                <li className="ask__improvement__list__inner ask__improvement__list__inner-redesign">
                    <div className="ask__improvement__list__inner-item">
                        2.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <p className="ask__improvement__list__inner-item__text ask__improvement__list__inner-item__text-other">
                            Подготовка новой контентной составляющей. С ориентацией на нее создается новый макет.
                        </p>
                    </div>
                </li>
                <li className="ask__improvement__list__inner ask__improvement__list__inner-redesign">
                    <div className="ask__improvement__list__inner-item">
                        3.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <p className="ask__improvement__list__inner-item__text ask__improvement__list__inner-item__text-other">
                            Разработка макета. Выполняется на основе уже готовой концепции.
                        </p>
                    </div>
                </li>
                <li className="ask__improvement__list__inner ask__improvement__list__inner-redesign">
                    <div className="ask__improvement__list__inner-item">
                        4.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <p className="ask__improvement__list__inner-item__text ask__improvement__list__inner-item__text-other">
                            Верстка. Выполняется воплощение дизайна макета в жизнь. И заодно – создание сайта, ориентированного на конкретную аудиторию
                        </p>
                    </div>
                </li>
                <li className="ask__improvement__list__inner ask__improvement__list__inner-redesign">
                    <div className="ask__improvement__list__inner-item">
                        5.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <p className="ask__improvement__list__inner-item__text ask__improvement__list__inner-item__text-other">
                            Программирование. Вносятся правки в код, выполняются работы по оптимизации, ускоряется открытие страниц.
                        </p>
                    </div>
                </li>
                <li className="ask__improvement__list__inner ask__improvement__list__inner-redesign">
                    <div className="ask__improvement__list__inner-item">
                        6.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <p className="ask__improvement__list__inner-item__text ask__improvement__list__inner-item__text-other">
                            Тестирование. Проверяется работоспособность нового дизайна, удобство пользования сайтом, наличие ошибок. При необходимости вносятся оперативные правки.
                        </p>
                    </div>
                </li>
            </ul>
        )
    }
}
export default MainStepsList;