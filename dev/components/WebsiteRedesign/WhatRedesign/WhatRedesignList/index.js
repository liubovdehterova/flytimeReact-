import React, { Component } from 'react';

class WhatRedesignList extends Component {
    render() {
        return(
            <ul className="ask__improvement__list ask__improvement__list-other">
                <li className="ask__improvement__list__inner">
                    <div className="ask__improvement__list__inner-item">
                        01.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <h4 className="ask__improvement__list__inner-item__title" >
                            Редизайн логотипов
                        </h4>
                        <p className="ask__improvement__list__inner-item__text">
                            Выполняется, если лого компании устарело или является малоудобным в использовании.
                        </p>
                    </div>
                </li>
                <li className="ask__improvement__list__inner">
                    <div className="ask__improvement__list__inner-item">
                        02.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <h4 className="ask__improvement__list__inner-item__title" >
                            Изменения цветовой гаммы, шрифтов

                        </h4>
                        <p className="ask__improvement__list__inner-item__text">
                            Выполняется для соответствия новому логотипу, создания нового запоминающегося дизайна, использования современных фишек.
                        </p>
                    </div>
                </li>
                <li className="ask__improvement__list__inner">
                    <div className="ask__improvement__list__inner-item">
                        03.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <h4 className="ask__improvement__list__inner-item__title" >
                            Изменение контента
                        </h4>
                        <p className="ask__improvement__list__inner-item__text">
                            Для ускоренного открытия страниц избавляются от лишнего контента: удаляют устаревшие разделы и подразделы, меняют картинки на более качественные.
                            При необходимости добавляют новый контент (те же разделы и подразделы), а также обновляют текстовую составляющую.
                        </p>
                    </div>
                </li>
                <li className="ask__improvement__list__inner">
                    <div className="ask__improvement__list__inner-item">
                        04.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <h4 className="ask__improvement__list__inner-item__title" >
                            Внедрение элементов с анимацией
                        </h4>
                        <p className="ask__improvement__list__inner-item__text">
                            Они создают ощущение взаимодействия. А при грамотном применении могут даже увеличить конверсию.
                        </p>
                    </div>
                </li>
                <li className="ask__improvement__list__inner">
                    <div className="ask__improvement__list__inner-item">
                        05.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <h4 className="ask__improvement__list__inner-item__title" >
                            Проработка HTML-кода
                        </h4>
                        <p className="ask__improvement__list__inner-item__text">
                            Это важно для увеличения эффективности продвижения в поисковых системах.
                        </p>
                    </div>
                </li>
                <li className="ask__improvement__list__inner">
                    <div className="ask__improvement__list__inner-item">
                        06.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <h4 className="ask__improvement__list__inner-item__title" >
                            Оптимизация юзабилити
                        </h4>
                        <p className="ask__improvement__list__inner-item__text">
                            Выполняются работы по улучшению удобства пользования сайтом: создается новое меню, улучшается навигация, добавляются поисковые фильтры и прочие элементы.
                        </p>
                    </div>
                </li>
            </ul>
        )
    }
}
export default WhatRedesignList;