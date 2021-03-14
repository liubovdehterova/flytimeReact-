import React, { Component } from 'react';

import Info from './Info';
import Title from './Title';
import Button from './Button';

class Main extends Component {
    render() {
        return (
            <div className="option">
                <h3 className="option__titel">КОМПЛЕКСНЫЕ РЕШЕНИЯ.</h3>
                <div className="option__inner">
                    <div className="option__inner__information">
                        <Title 
                            title="Интернет Магазин"
                        />
                        <Info 
                              text="Делаем работу интернет-магазина простой и быстрой благодаря специальным инструментам."
                        />
                        <Button 
                            button="Подробнее"
                        />
                    </div>
                    <div className="option__inner__information">
                        <Title 
                            title="Корпоративные сайты"
                        />
                        <Info 
                            text="Разрабатываем корпоративные проекты различной сложности и масштаба."
                        />
                        <Button 
                            button="Подробнее"
                        />
                    </div>
                    <div className="option__inner__information">
                        <Title 
                            title="Доработка сайта"
                        />
                        <Info 
                            text="Внедряем новые 'хотелки', развиваем функционал, оптимизируем работу модулей и плагинов. "
                        />
                        <Button 
                            button="Подробнее"
                        />
                    </div>
                    <div className="option__inner__information">
                        <Title 
                            title="Бизнес сайт"
                        />
                        <Info 
                            text="Помогаем создать правильное позиционирование для расширения партнерской и клиентской сети."
                        />
                        <Button 
                            button="Подробнее"
                        />
                    </div>
                    <div className="option__inner__information">
                        <Title 
                            title="Сайт визитка"
                        />
                        <Info 
                            text="Уделяем особое внимание созданию эмоции и яркому впечатлению о вашем бренде.?"
                        />
                        <Button 
                            button="Подробнее"
                        />
                    </div>
                    <div className="option__inner__information">
                        <Title 
                            title="SEO"
                        />
                        <Info 
                            text="Оптимизируем сайт под требования поисковых систем и увеличиваем объемы бесплатного органического трафика.?"
                        />
                        <Button
                            button="Подробнее"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;