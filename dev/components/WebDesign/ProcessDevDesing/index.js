import React, { Component } from 'react';

class ProcessDevDesign extends Component{
    render() {
        return(
            <div className="process">
                <div className="process__head">
                    <h1 className="process__head__title">
                        Процесс разработки дизайна сайта
                    </h1>
                </div>
                <div className="process__inner">
                    <div className="process__list idea">
                        <h3 className="process__list__title">
                            Определение цели и задач
                        </h3>
                        <p className="process__list__description">
                            Какие задачи он должен выполнять сайт сайт:
                            функцию представительства компании в Интернете или же продажа услуги или товара.
                        </p>
                    </div>
                    <div className="process__list study">
                        <h3 className="process__list__title">
                            Исследование
                        </h3>
                        <p className="process__list__description">
                            Анализ и сбор данных о проекте.
                            Создание технического документа, с точным описанием функционала сайта.
                        </p>
                    </div>
                    <div className="process__list prototype">
                        <h3 className="process__list__title">
                            Прототип
                        </h3>
                        <p className="process__list__description">
                            Дизайнер производит сборку прототипа, где будет показан весь функционал, расположение элементов.
                        </p>
                    </div>
                </div>
                <div className="process__inner__other ">
                    <div className="process__list design">
                        <h3 className="process__list__title">
                            Разработка дизайна
                        </h3>
                        <p className="process__list__description">
                            Подробная разработка внешнего вида сайта, проработка деталей и анимации.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProcessDevDesign;