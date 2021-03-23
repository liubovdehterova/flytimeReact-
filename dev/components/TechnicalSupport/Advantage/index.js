import React, { Component } from 'react';

class Advantage extends Component {
    render() {
        return(
            <div className="advantage__container">
                <h1 className="advantage__container__title">
                    Преимущества сотрудничества с FLY TIME
                </h1>
                <ul className="advantage__container__list">
                    <li className="advantage__container__list__inner">
                        <h3 className="advantage__container__list__inner__title">
                            Оперативное устранение ошибок
                        </h3>
                        <p className="advantage__container__list__inner__description">
                            оперативное устранение ошибок и неисправностей в рабочее время (решение критических проблем реализуется и вне рабочее);
                        </p>
                    </li>
                    <li className="advantage__container__list__inner">
                        <h3 className="advantage__container__list__inner__title">
                            Квалифицированные сотрудники
                        </h3>
                        <p className="advantage__container__list__inner__description">
                            какая бы проблема не возникла, мы поможем вам её решить.
                        </p>
                    </li>
                    <li className="advantage__container__list__inner">
                        <h3 className="advantage__container__list__inner__title">
                            Мониторинг
                        </h3>
                        <p className="advantage__container__list__inner__description">
                            постоянный мониторинг позволяет избежать рисков во время SEO-оптимизации и продвижения сайта.
                        </p>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Advantage;