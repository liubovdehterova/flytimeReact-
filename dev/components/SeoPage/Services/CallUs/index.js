import React, {Component } from 'react';

import Form from './Form';

class CallUs extends Component {
    
    render() {
        const { propsDeleteSer, propsDeleteStateSer } = this.props;
        return (
            <div className="conteiner-item">
                <div className="ask">
                    <div className="ask__inner">
                        <div className="ask__inner-item">
                            <h1 className="ask__titel">
                                Узнать стоимость
                            </h1>
                            <button
                                className="button__esc"
                                onClick={propsDeleteSer}
                            >
                                X
                            </button>
                            {
                                !propsDeleteStateSer ? document.querySelectorAll('.conteiner-item').remove() : null
                            }
                        </div>
                        <Form />
                    </div>
                </div>
            </div>
        );
    }
}

export default CallUs;