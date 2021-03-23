import React, { Component } from 'react';

class WorkImprovementList extends Component {
    render() {
        return(
            <ul className="ask__improvement__list ask__improvement__list-other">
                <li className="ask__improvement__list__inner">
                    <div className="ask__improvement__list__inner-item">
                        01.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <h4 className="ask__improvement__list__inner-item__title" >
                            Улучшение бизнес-логики
                        </h4>
                        <p className="ask__improvement__list__inner-item__text">
                            Повышение юзабилити, чтобы пользователям было проще и удобнее пользоваться сайтом.
                        </p>
                    </div>
                </li>
                <li className="ask__improvement__list__inner">
                    <div className="ask__improvement__list__inner-item">
                        02.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <h4 className="ask__improvement__list__inner-item__title" >
                            Верстка.
                        </h4>
                        <p className="ask__improvement__list__inner-item__text">
                            Устранение критических ошибок, оптимизация сайта под разные браузеры, разные разрешения экранов, разные устройства (ПК, смартфоны, планшеты).
                        </p>
                    </div>
                </li>
                <li className="ask__improvement__list__inner">
                    <div className="ask__improvement__list__inner-item">
                        03.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <h4 className="ask__improvement__list__inner-item__title" >
                            Редизайн
                        </h4>
                        <p className="ask__improvement__list__inner-item__text">
                            Изменение текущего стиля оформления, замена картинок на более качественные, доработка функционала.
                        </p>
                    </div>
                </li>
                <li className="ask__improvement__list__inner">
                    <div className="ask__improvement__list__inner-item">
                        04.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <h4 className="ask__improvement__list__inner-item__title" >
                            Рефакторинг.
                        </h4>
                        <p className="ask__improvement__list__inner-item__text">
                            Техническая оптимизация программного кода, устранение содержащихся в нем ошибок, повышение производительности сайта (ускорение загрузки страниц и пр.).
                        </p>
                    </div>
                </li>
                <li className="ask__improvement__list__inner">
                    <div className="ask__improvement__list__inner-item">
                        05.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <h4 className="ask__improvement__list__inner-item__title" >
                            Создание нового функционала
                        </h4>
                        <p className="ask__improvement__list__inner-item__text">
                            Добавление онлайн-калькулятора, удобной формы заказа, галереи, настройка виджетов соцсетей, возможность оставления комментариев без регистрации и пр.
                        </p>
                    </div>
                </li>
            </ul>
        )
    }
}
export default WorkImprovementList;