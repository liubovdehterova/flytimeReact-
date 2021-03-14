import React, {Component } from 'react';

import Form from './Form';

class CallUs extends Component {
    
    render() {
        const { propsDeleteFunction, propsDeleteState } = this.props;
        return (
            <div className="conteiner-item">
                <div className="ask">
                    <div className="ask__inner ask__inner__site">
                        <div className="ask__inner-item">
                            <h1 className="ask__titel">Оставьте Сообщение</h1>
                            <button 
                                className="button__esc"
                                onClick={propsDeleteFunction}
                            >
                                X
                            </button>
                            {
                                !propsDeleteState ? document.querySelectorAll('.conteiner-item').remove() : null
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