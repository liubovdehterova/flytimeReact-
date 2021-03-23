import React, { Component } from 'react'
import CallUs from "./CallUs";

class TechnicalDescription extends Component {
    render() {
        const { propsTechnicalSupport, stateTechnicalSupport } = this.props;
        return(
            <div className="context__call">
                <div className="context__call__inner">
                    <h1 className="context__call__inner__title">
                        Служба поддержки сайтов
                    </h1>
                    <p className="context__call__inner____description">
                        Казалось бы: проект запущен, трафик идет — цель достигнута.
                        Но это лишь первый этап развития проекта во Всемирной паутине.
                        Далее следует ежедневная работа над продвижением и улучшением его эффективности.
                        Стабильная прибыль — это регулярный труд над проектом.
                        И техническая поддержка сайта играет в этом важную роль, обеспечивая доступное и качественное функционирование ресурса.
                    </p>
                </div>
                <div className="context__call__form">
                    <button className="context__call__form__button block__main__button"
                            onClick={propsTechnicalSupport}
                    >
                        Обсудить проект
                    </button>
                    {
                        stateTechnicalSupport ? <CallUs
                            propsDeleteFunctionTechnicalSupport={ propsTechnicalSupport }
                            propsDeleteStateTechnicalSupport={ stateTechnicalSupport }
                        /> : null
                    }
                </div>
            </div>
        )
    }
}
export default TechnicalDescription;