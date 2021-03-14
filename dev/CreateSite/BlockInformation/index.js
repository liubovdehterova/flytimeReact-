import React, {Component} from 'react';
import CallUs from "./CallUs";

class BlockInformation extends Component {
    render() {
        const { formSiteFunction, formSiteState } = this.props;
        return (
            <div className="block__main">
                <div className="block__main__inner">
                    <h1 className="block__main__inner__title">
                        Разработка сайта под задачи бизнеса
                    </h1>
                    <p className="block__main__inner__info">
                        Интернет-магазины, порталы, корпоративные сайты – это WEB решения,
                        позволяющие масштабировать бизнес, улучшить взаимодействие с клиентами,
                        повысить лояльность и увеличить доход.
                        Мы предлагаем комплексное решение задач для диджитализации любой сферы бизнеса.
                    </p>
                </div>
                <div className="block__call__link">
                    <button className="block__main__button"
                            onClick={formSiteFunction}
                    >
                        Ниписать нам
                    </button>
                    {
                        formSiteState ? <CallUs
                            propsDeleteFunction={ formSiteFunction }
                            propsDeleteState={ formSiteState }
                        /> : null
                    }
                </div>
            </div>
        );
    }
}
export default BlockInformation;