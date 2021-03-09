import React, { Component } from 'react';

import Form from './Form';

class CallUs extends Component {
    render() {
        return (
            <div className="conteiner-item">
                <div className="ask">
                    <div className="ask__inner">
                        <div className="ask__inner-item">
                            <h1 className="ask__titel">Есть вопросы?</h1>
                            <button 
                                className="button__esc"
                            >
                                X
                            </button>
                        </div>
                        <Form />
                    </div>
                </div>
            </div>
        );
    }
}

export default CallUs;