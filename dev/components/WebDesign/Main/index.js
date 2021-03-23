import React, { Component } from 'react';

import Info from './Info';
import Title from './Title';
import Button from './Button';

class Main extends Component {
    render() {
        return (
            <div className="option">
                <h3 className="option__titel">Для нас дизайн - это все</h3>
                <div className="option__inner">
                    <div className="option__inner__information">
                        <a href="#" className="option__inner__information__item">
                            <Title
                                title="Редизайн сайта"
                            />
                            <Info
                                text="Для повышения лояльности и поддержания современного и прогрессивного имиджа."
                            />
                            <Button
                                button="Подробнее"
                            />
                        </a>
                    </div>
                    <div className="option__inner__information">
                        <a href="#" className="option__inner__information__item">
                            <Title
                                title="Адаптивный дизайн"
                            />
                            <Info
                                text="Дизайн, который будет одинаково удобен на компьютере, планшете и телефоне."
                            />
                            <Button
                                button="Подробнее"
                            />
                        </a>
                    </div>
                    <div className="option__inner__information">
                        <a href="#" className="option__inner__information__item">
                            <Title
                                title="Дизайн лендингов"
                            />
                            <Info
                                text="Для повышения эффективности продаж на всех этапах взаимодействия с клиентом!"
                            />
                            <Button
                                button="Подробнее"
                            />
                        </a>
                    </div>
                    <div className="option__inner__information">
                        <a href="#" className="option__inner__information__item">
                            <Title
                                title="Дизайн корпоротивного сайта"
                            />
                            <Info
                                text="Формирование имиджа, авторитета, узнаваемости компании и бренда в Интернете и за его пределами."
                            />
                            <Button
                                button="Подробнее"
                            />
                        </a>
                    </div>
                    <div className="option__inner__information">
                        <a href="#" className="option__inner__information__item">
                            <Title
                                title="Индивидуальный дизайн сайта"
                            />
                            <Info
                                text="Оригинальное, стильное, уникальное решение для любого бизнеса."
                            />
                            <Button
                                button="Подробнее"
                            />
                        </a>
                    </div>
                    <div className="option__inner__information">
                        <a href="#" className="option__inner__information__item">
                            <Title
                                title="Индивидуальный проект"
                            />
                            <Info
                                text="Реализация любых нестандартных веб-решений в области дизайна и функционала ресурса."
                            />
                            <Button
                                button="Подробнее"
                            />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;