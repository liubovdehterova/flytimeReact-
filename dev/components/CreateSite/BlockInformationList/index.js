import React, {Component } from 'react';

class BlockInformationList extends Component{
    render() {
        return(
            <div className="block__info">

                <div className="block__info__inner">
                    <a href="/OnlineStoreCreation" className="block__info__inner__button">
                        <h1 className="block__info__inner__title">
                            Интернет магазин
                        </h1>
                        <p className="block__info__inner__descrition">
                            Делаем работу интернет-магазина простой и быстрой благодаря специальным инструментам.
                        </p>
                        <p className="block__info__inner__button">
                            подробнее
                        </p>
                    </a>
                </div>
                <div className="block__info__inner">
                    <a href="/CorporationCreateSite" className="block__info__inner__button">
                        <h1 className="block__info__inner__title">
                            Корпоративные сайты
                        </h1>
                        <p className="block__info__inner__descrition">
                            Разрабатываем корпоративные проекты различной сложности и масштаба.
                        </p>
                        <p className="block__info__inner__button">
                            подробнее
                        </p>
                    </a>
                </div>
                <div className="block__info__inner">
                    <a href="/CreateLendingPage" className="block__info__inner__button">
                        <h1 className="block__info__inner__title">
                            Landing page
                        </h1>
                        <p className="block__info__inner__descrition">
                            Создаем продающие лендинги с запоминающимся дизайном и максимальной конверсией.
                        </p>
                        <p className="block__info__inner__button">
                            подробнее
                        </p>
                    </a>
                </div>
                <div className="block__info__inner">
                    <a href="/BusinessCardWebsite" className="block__info__inner__button">
                        <h1 className="block__info__inner__title">
                            Сайт визитка
                        </h1>
                        <p className="block__info__inner__descrition">
                            Уделяем особое внимание созданию эмоции и яркому впечатлению о вашем бренде.
                        </p>
                        <p className="block__info__inner__button">
                            подробнее
                        </p>
                    </a>
                </div>
                <div className="block__info__inner">
                    <a href="/BusinessSite" className="block__info__inner__button">
                        <h1 className="block__info__inner__title">
                            Бизнес сайт
                        </h1>
                        <p className="block__info__inner__descrition">
                            Помогаем бизнесу создать правильное позиционирование для расширения партнерской и клиентской сети.
                        </p>
                        <p className="block__info__inner__button">
                            подробнее
                        </p>
                    </a>
                </div>
            </div>
        )
    }
}
export default BlockInformationList;