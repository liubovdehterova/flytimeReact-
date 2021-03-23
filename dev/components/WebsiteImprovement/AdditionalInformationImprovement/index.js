import React, { Component } from 'react';

import AdditionalInformationImprovementList from './AdditionalInformationImprovementList'
import CallUs from "./CallUs";

class AdditionalInformationImprovement extends Component {
    render() {
        const { propsFunctionAdditional, stateFunctionAdditional} = this.props;
        return(
            <div className="ask__improvement ask__improvement-other">
                <h1 className="ask__improvement__title ask__improvement__title-other">
                    Кому и когда требуется доработка существующего сайта?
                </h1>
                <p className="ask__improvement__description">
                    Веб-технологии развиваются семимильными шагами и со временем любой интернет-проект устаревает.
                    А, возможно, он изначально был выполнен с ошибками (из-за неопытности разработчиков или выбора самого дешевого тарифа).
                    Так или иначе, но техническая модернизация сайта требуется каждому интернет-проекту. Хотя понимают это далеко не все.
                </p>
                <p className="ask__improvement__description">
                    Наиболее популярной услугой в нашей веб-студии является доработка интернет сайта,
                    занимающегося продажами товаров. Ведь интернет-магазины постоянно нуждаются в улучшении функционала и юзабилити.
                    Над ними работают всегда, так как малейшая мелочь может существенно увеличить конверсию и, соответственно, прибыль компании.
                    Цена доработки сайта в данном случае стоит на втором плане.
                    Ведь любые ошибки негативно влияют на прибыльность интернет-магазина, а это для компании не допустимо.
                </p>
                <p className="ask__improvement__description">
                    Также доработка сайта в Киеве требуется владельцам любых площадок,
                    которых не устраивает дизайн, функционал, движок. Выполняется данная работа и в том случае, если:
                </p>
                <AdditionalInformationImprovementList />
                <p className="ask__improvement__description">
                    Любой интернет-проект должен постоянно меняться, адаптироваться под современные реалии.
                    Поэтому модернизация сайта является одной из самой популярной услуг.
                </p>
                <div className="context__call__other">
                    <button className="block__call__information__link block__call__link__inner"
                            onClick={ propsFunctionAdditional }
                    >
                        Обсудить проект
                    </button>
                    {
                        stateFunctionAdditional ? <CallUs
                            propsDeleteFunctionAdditional={ propsFunctionAdditional }
                            propsDeleteStateAdditional={ stateFunctionAdditional }
                        /> : null
                    }
                </div>
            </div>
        )
    }
}
export default AdditionalInformationImprovement;