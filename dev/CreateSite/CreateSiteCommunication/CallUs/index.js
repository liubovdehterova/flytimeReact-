import React, {Component } from 'react';

import Form from './Form';

class CallUs extends Component {
    
    render() {
        const { propsDeleteFunctionProps, propsDeleteStateProps } = this.props;
        return (
            <div className="conteiner-item">
                <div className="ask">
                    <div className="ask__inner ask__inner__site">
                        <div className="ask__inner-item">
                            <h1 className="ask__titel">
                                Осталось 3 шага
                            </h1>
                            <button 
                                className="button__esc"
                                onClick={propsDeleteFunctionProps}
                            >
                                X
                            </button>
                            {
                                !propsDeleteStateProps ? document.querySelectorAll('.conteiner-item').remove() : null
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