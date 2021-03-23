import React, { Component } from 'react'
import Title from "../Main/Title";

class List extends Component {
    render() {
        return(
            <div className="option option-other">
                <h3 className="option__titel">
                    WEB-дизайн будет идеальным решением
                </h3>
                <h1 className="mobile__info__title mobile__info__title-other">
                    Если вам необходимо
                </h1>
                <div className="option__inner">
                    <div className="option__inner__information option__inner__information-other">
                        <span className="option__inner__information-other__num">01/</span>
                            <Title
                                title="Изменить направление деятельности"
                            />
                    </div>
                    <div className="option__inner__information option__inner__information-other">
                        <span className="option__inner__information-other__num">02/</span>
                            <Title
                                title="Переделать устаревший дизайн"
                            />
                    </div>
                    <div className="option__inner__information option__inner__information-other">
                        <span className="option__inner__information-other__num">03/</span>
                            <Title
                                title="Повысить конверсию сайта"
                            />
                    </div>
                    <div className="option__inner__information option__inner__information-other">
                        <span className="option__inner__information-other__num">04/</span>
                            <Title
                                title="Продать товар или услугу"
                            />
                    </div>
                    <div className="option__inner__information option__inner__information-other">
                        <span className="option__inner__information-other__num">05/</span>
                            <Title
                                title="Адаптировать существующий сайт под разные устройства"
                            />
                    </div>
                    <div className="option__inner__information option__inner__information-other">
                        <span className="option__inner__information-other__num">06/</span>
                        <Title
                            title="Исправить неудачное решение другой компании"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default List;