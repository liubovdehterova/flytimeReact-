import React, { Component } from 'react';

class FooterLink extends Component {
    render() {
        return(
            <div className="footer__main">
                <div className="logo">
                    <a href="/main" className="logo__link"></a>
                </div>
                <div className="footer__link">
                    <ul className="footer__link__inner">
                        <p className="footer__link__title">
                            <a href="#" className="footer__link__title__inner">
                                О нас
                            </a>
                        </p>
                        <li className="footer__link__inner__list">
                            <a href="#"  className="footer__link__inner__list-item">
                                Отзывы клиентов
                            </a>
                        </li>
                        <li className="footer__link__inner__list">
                            <a href="#"  className="footer__link__inner__list-item">
                                Команда
                            </a>
                        </li>
                        <li className="footer__link__inner__list">
                            <a href="#"  className="footer__link__inner__list-item">
                                Офис
                            </a>
                        </li>
                    </ul>

                    <div className="footer__link__inner">
                        <p className="footer__link__title">
                            <a href="#"  className="footer__link__title__inner">
                                Услуги
                            </a>
                        </p>
                        <div className="list">
                            <ul className="footer__link__inner">
                                <li className="footer__link__inner__list">
                                    <a href="/DevelopSite"  className="footer__link__inner__list-item">
                                        Разработка сайтов
                                    </a>
                                </li>
                                <li className="footer__link__inner__list">
                                    <a href="#"  className="footer__link__inner__list-item">
                                        Разработка web порталов
                                    </a>
                                </li>
                                <li className="footer__link__inner__list">
                                    <a href="#"  className="footer__link__inner__list-item">
                                        Интернет-маркетинг
                                    </a>
                                </li>
                                <li className="footer__link__inner__list">
                                    <a href="/WebsiteImprovement"  className="footer__link__inner__list-item">
                                        Доработка сайта
                                    </a>
                                </li>
                            </ul>

                            <ul className="footer__link__inner">
                                <li className="footer__link__inner__list">
                                    <a href="#" className="footer__link__inner__list-item">
                                        Продвижение интернет магазинов
                                    </a>
                                </li>
                                <li className="footer__link__inner__list">
                                    <a href="/ContextualAdvertising" className="footer__link__inner__list-item">
                                        Контекстная реклама
                                    </a>
                                </li>
                                <li className="footer__link__inner__list">
                                    <a href="/SeoPage" className="footer__link__inner__list-item">
                                        SEO-продвижение
                                    </a>
                                </li>
                                <li className="footer__link__inner__list">
                                    <a href="#" className="footer__link__inner__list-item">
                                        Брендинг
                                    </a>
                                </li>
                            </ul>

                            <ul className="footer__link__inner">
                                <li className="footer__link__inner__list">
                                    <a href="/WebDesign" className="footer__link__inner__list-item">
                                        Веб Дизайн
                                    </a>
                                </li>
                                <li className="footer__link__inner__list">
                                    <a href="#" className="footer__link__inner__list-item">
                                        Проектирование интерфейсов
                                    </a>
                                </li>
                                <li className="footer__link__inner__list">
                                    <a href="/TechnicalSupport" className="footer__link__inner__list-item">
                                        Техническая поддержка
                                    </a>
                                </li>
                                <li className="footer__link__inner__list">
                                    <a href="/AnalyticsSetup" className="footer__link__inner__list-item">
                                        Настройка аналитики
                                    </a>
                                </li>
                                <li className="footer__link__inner__list">
                                    <a href="/WebsiteRedesign" className="footer__link__inner__list-item">
                                        Редизайн сайта
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default FooterLink;