import React, { Component } from 'react';
import CallUs from "./CallUs";


class CreateSiteCommunication extends Component {
    render() {
        const { formSiteFunctionSite, formSiteStateSite } = this.props;
        return(
            <>
                <h5 className="subtitle">Не знаете нужно?</h5>
                <div className="block__main block__main__other">
                    <div className="block__main__inner">
                        <h1 className="block__main__inner__title">
                            Какой сайт подойдет именно тебе?
                        </h1>
                        <p className="block__main__inner__info">
                            Оставьте заявку - наши менеджеры разберут вашу текущую ситуацию и помогут подобрать сайт для масштабирования бизнеса
                        </p>
                    </div>
                    <div className="block__call__link">
                        <button className="block__call__information__link block__call__link__inner"
                                onClick={formSiteFunctionSite}
                        >
                            Оставить заявку
                        </button>
                        {
                            formSiteStateSite ? <CallUs
                                propsDeleteFunctionProps={ formSiteFunctionSite }
                                propsDeleteStateProps={ formSiteStateSite }
                            /> : null
                        }
                    </div>
                </div>
            </>
        );
    }
}
export default CreateSiteCommunication;