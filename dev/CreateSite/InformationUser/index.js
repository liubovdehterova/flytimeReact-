import React, { Component } from 'react';

import TitleDev from "./TitleDev";

class InformationUser extends Component {
    render() {
        return (
            <>
                <TitleDev />
                <div className="block__info">
                    <div className="block__info__inner block__info__inner-other">
                        <h6 className="block__info__inner__title block__info__inner__title-other">
                            Разработка дизайна
                        </h6>
                        <p className="block__info__inner__descrition">
                            Специалисты компании Fly Time создают современные сайты, используя уникальный дизайн.
                            Если у вашей компании есть фирменный стиль,
                            мы внедряем его и создаем узнаваемый интернет ресурс,
                            положительно влияющий на имидж. Помогаем разработать айдентику и внедряем ее в дизайн.
                        </p>
                    </div>
                    <div className="block__info__inner block__info__inner-other">
                        <h6 className="block__info__inner__title block__info__inner__title-other">
                            Индевидуальные разработки
                        </h6>
                        <p className="block__info__inner__descrition">
                            Технические специалисты разрабатывают индивидуальные инструменты,
                            настроенные под конкретные задачи бизнеса.
                            Это позволяет не только автоматизировать многие действия и улучшить бизнес процессы,
                            но и предоставлять клиентам услуги качественнее..
                        </p>
                    </div>
                    <div className="block__info__inner block__info__inner-other">
                        <h6 className="block__info__inner__title block__info__inner__title-other">
                            Внедрение новых технологий
                        </h6>
                        <p className="block__info__inner__descrition">
                            Благодаря использованию новых технологий интернет-магазины работают быстро,
                            весь функционал корректно отображается и пользователи чувствуют себя комфортно.
                            Обеспечивается надежная защита, оптимизируются рабочие процессы.
                        </p>
                    </div>
                    <div className="block__info__inner block__info__inner-other">
                        <h6 className="block__info__inner__title block__info__inner__title-other">
                            Подклюсение сторонних сервисов
                        </h6>
                        <p className="block__info__inner__descrition">
                            Мы подключаем платежные системы, базы данных и прочие сервисы,
                            позволяющие удобно использовать интернет-магазины и другие ресурсы для взаимодействия с клиентами.
                            Наша задача – обеспечить правильную работу всех сервисов на вашем сайте
                        </p>
                    </div>
                    <div className="block__info__inner block__info__inner-other">
                        <h6 className="block__info__inner__title block__info__inner__title-other">
                            Маркетологовые стратегии
                        </h6>
                        <p className="block__info__inner__descrition">
                            Помимо технической разработки мы предлагаем комплексное продвижение.
                            Интернет-магазины будут выделяться на фоне конкурентов,
                            мы детально анализируем целевую аудиторию,
                            разрабатываем стратегию продвижения бренда и улучшаем позиции сайта.
                        </p>
                    </div>
                    <div className="block__info__inner block__info__inner-other">
                        <h6 className="block__info__inner__title block__info__inner__title-other">
                            Запуск и поддержка проекта
                        </h6>
                        <p className="block__info__inner__descrition">
                            Специалисты компании Fly Time тестируют весь функционал и помогают запустить проект.
                            Современные сайты устроены не сложно, мы обучаем ваших сотрудников работе с ресурсом,
                            оказываем гарантийную техническую поддержку и сопровождаем до полного запуска.
                        </p>
                    </div>
                </div>
            </>
        );
    }
}
export default InformationUser;