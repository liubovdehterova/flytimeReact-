import React, { Component } from 'react'

import StageOne from './StageOne'

class Stages extends Component {
    render() {
        return(
            <>
                <StageOne
                    subtitle = "Этап 1"
                    title = "Подготовка к рекламной кампании"
                    text =
                    "Грамотное планирование рекламной компании — залог ее эффективности и достижения поставленных целей.
                    Подготовка осуществляется с учетом сроков проведения и этапов. Такой подход
                    позволяет избежать дополнительных затрат на маркетинговые мероприятия и достичь отличных результатов."
                    textListOne = "Глубокий анализ ниши, целевой аудитории, конкурентов. Технический анализ сайта и его юзабилити."
                    textListTwo = "Отсеивание нецелевой аудитории с целью снижения расходов на проведение рекламных кампаний."
                    textListThree = "Оценка сезонности бизнеса с минимальным уровнем погрешности в процессе анализа изменений трафика."
                    textListFour = "Составление плана рекламных кампаний в высокий сезон. Разработка медиаплана для достижения поставленных целей."
                />
                <StageOne
                    subtitle = "Этап 2"
                    title = "Запуск рекламной кампании"
                    text =
                        "Запуск рекламной кампании занимает до 3 дней.
                        Грамотное планирование на предыдущем этапе и быстрое внедрение рекламной стратегии позволяет
                        эффективно привлекать аудиторию и мгновенно реагировать на спрос."
                    textListOne = "Внедрение рекламной стратегии на разных каналах по привлечению ЦА."
                    textListTwo = "Настройка автоматизированных сервисов, чтобы следить за эффективностью рекламных кампаний и получить максимальный результат."
                    textListThree = "Установка «онлайн-консультанта»"
                    textListFour = "Поддержка связи с потенциальным клиентом и увеличить конверсию."
                    newClass = 'bg'
                />
                <StageOne
                    subtitle = "Этап 3"
                    title = "Ведение рекламной кампании"
                    text =
                        "Ежемесячный анализ рекламных кампаний с учетом неконверсионных запросов.
                        Оптимизация бюджета и при необходимости изменение стратегии проведения рекламных мероприятий."
                    textListOne = "Создание рекламных объявлений, ориентированных на разные ЦА и выявление лучшего, наиболее эффективного."
                    textListTwo = "Анализ данных «Яндекс.Метрики» и Google Analytics. Формирование целей на посещение страниц, клики и заполнение форм, оформление покупок."
                    textListThree = "Анализ полученных данных по эффективности работы сайта и настройка дополнительных видов рекламы (медийная, блоки, e-mail, YouTube). Поиск решений по развитию и модернизации сайта."
                    textListFour = "Настройка динамического ремаркетинга и внедрение методов по возврату потенциальных клиентов, которые были заинтересованы в товаре, но не оформили заказ."
                />
            </>
        )
    }
}
export default Stages;