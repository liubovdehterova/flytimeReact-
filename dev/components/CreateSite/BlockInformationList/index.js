import React, {Component } from 'react';

class BlockInformationList extends Component{
    render() {
        return(
            <div className="block__info">

                <div className="block__info__inner">
                    <h1 className="block__info__inner__title">
                        Интернет магазин
                    </h1>
                    <p className="block__info__inner__descrition">
                        Делаем работу интернет-магазина простой и быстрой благодаря специальным инструментам.
                    </p>
                    <a href="#" className="block__info__inner__button">
                        подробнее
                    </a>
                </div>
                <div className="block__info__inner">
                    <h1 className="block__info__inner__title">
                        Корпоративные сайты
                    </h1>
                    <p className="block__info__inner__descrition">
                        Разрабатываем корпоративные проекты различной сложности и масштаба.
                    </p>
                    <a href="#" className="block__info__inner__button">
                        подробнее
                    </a>
                </div>
                <div className="block__info__inner">
                    <h1 className="block__info__inner__title">
                        Landing page
                    </h1>
                    <p className="block__info__inner__descrition">
                        Создаем продающие лендинги с запоминающимся дизайном и максимальной конверсией.
                    </p>
                    <a href="#" className="block__info__inner__button">
                        подробнее
                    </a>
                </div>
                <div className="block__info__inner">
                    <h1 className="block__info__inner__title">ИНДИВИДУАЛЬНОЕ WEB-РЕШЕНИЯ</h1>
                    <p className="block__info__inner__descrition">
                        Мы способны создавать любые WEB решения и внедрять инструменты, благоприятно влияющие на бизнес.
                        Все, что поможет сделать вашу компанию лучше.
                    </p>
                    <a href="#" className="block__info__inner__button">
                        подробнее
                    </a>
                </div>
                <div className="block__info__inner">
                    <h1 className="block__info__inner__title">
                        КАТАЛОГ
                    </h1>
                    <p className="block__info__inner__descrition">
                        Cоздаем сайты-каталоги, повышающие лояльность клиента, снимающие возражения, а главное, быстродействующие и функциональные.
                    </p>
                    <a href="#" className="block__info__inner__button">
                        подробнее
                    </a>
                </div>
                <div className="block__info__inner">
                    <h1 className="block__info__inner__title">Сайт визитка</h1>
                    <p className="block__info__inner__descrition">
                        Уделяем особое внимание созданию эмоции и яркому впечатлению о вашем бренде.
                    </p>
                    <a href="#" className="block__info__inner__button">
                        подробнее
                    </a>
                </div>
            </div>
        )
    }
}
export default BlockInformationList;