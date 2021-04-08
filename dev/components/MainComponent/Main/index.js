import React, { Component } from 'react';

import Info from './Info';
import Title from './Title';
import Button from './Button';

class Main extends Component {
    render() {
        return (
            <div className="option">
                <h3 className="option__titel">КОМПЛЕКСНЫЕ РЕШЕНИЯ</h3>
                <div className="option__inner">
                    <div className="option__inner__information">
                        <a className="option__inner__information__link" href="/OnlineStoreCreation">
                            <Title
                                title="Интернет Магазин"
                            />
                            <Info
                                  text="Делаем работу интернет-магазина простой и быстрой благодаря специальным инструментам."
                            />
                            <Button
                                button="Подробнее"
                            />
                        </a>
                    </div>
                    <div className="option__inner__information">
                        <a className="option__inner__information__link" href="/CorporationCreateSite">
                            <Title
                                title="Корпоративные сайты"
                            />
                            <Info
                                text="Разрабатываем корпоративные проекты различной сложности и масштаба."
                            />
                            <Button
                                button="Подробнее"
                            />
                        </a>
                    </div>
                    <div className="option__inner__information">
                        <a className="option__inner__information__link" href="/WebsiteImprovement">
                            <Title
                                title="Доработка сайта"
                            />
                            <Info
                                text="Внедряем новые 'хотелки', развиваем функционал, оптимизируем работу модулей и плагинов. "
                            />
                            <Button
                                button="Подробнее"
                            />
                        </a>
                    </div>
                    <div className="option__inner__information">
                        <a className="option__inner__information__link" href="/BusinessSite">
                            <Title
                                title="Бизнес сайт"
                            />
                            <Info
                                text="Помогаем создать правильное позиционирование для расширения партнерской и клиентской сети."
                            />
                            <Button
                                button="Подробнее"
                            />
                        </a>
                    </div>
                    <div className="option__inner__information">
                        <a className="option__inner__information__link" href="/BusinessCardWebsite">
                            <Title
                                title="Сайт визитка"
                            />
                            <Info
                                text="Уделяем особое внимание созданию эмоции и яркому впечатлению о вашем бренде.?"
                            />
                            <Button
                                button="Подробнее"
                            />
                        </a>
                    </div>
                    <div className="option__inner__information">
                        <a className="option__inner__information__link" href="/SeoPage">
                            <Title
                                title="SEO"
                            />
                            <Info
                                text="Оптимизируем сайт под требования поисковых систем и увеличиваем объемы бесплатного органического трафика.?"
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