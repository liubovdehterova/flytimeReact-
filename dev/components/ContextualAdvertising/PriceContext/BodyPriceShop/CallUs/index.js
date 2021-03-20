import React, {Component } from 'react';

import Form from './Form';

class CallUs extends Component {
    render() {
        const { propsOpenFormFunction, stateOpenFormFunction } = this.props;
        return (
            <div className="conteiner-item">
                <div className="ask">
                    <div className="ask__inner ask__inner__site">
                        <div className="ask__inner-item">
                            <h1 className="ask__titel">
                                Лендинг или сайт с одной/двумя услугами
                            </h1>
                            <button 
                                className="button__esc"
                                onClick={ propsOpenFormFunction }
                            >
                                X
                            </button>
                            {
                                !stateOpenFormFunction ? document.querySelectorAll('.conteiner-item').remove() : null
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