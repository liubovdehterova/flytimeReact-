import React, {Component } from 'react';

import Form from './Form';

class CallUs extends Component {
    
    render() {
        const { propsDeleteMobile, propsDeleteStateMobile } = this.props;
        return (
            <div className="conteiner-item">
                <div className="ask">
                    <div className="ask__inner">
                        <div className="ask__inner-item">
                            <h1 className="ask__titel">
                                Обсудить проект
                            </h1>
                            <button
                                className="button__esc"
                                onClick={propsDeleteMobile}
                            >
                                X
                            </button>
                            {
                                !propsDeleteStateMobile ? document.querySelectorAll('.conteiner-item').remove() : null
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