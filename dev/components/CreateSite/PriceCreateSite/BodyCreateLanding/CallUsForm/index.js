import React, {Component } from 'react';

import Form from './Form';

class CallUsForm extends Component {
    render() {
        const { propsOpenFormFunctionLanding, stateOpenFormFunctionLanding } = this.props;
        return (
            <div className="conteiner-item">
                <div className="ask">
                    <div className="ask__inner ask__inner__site">
                        <div className="ask__inner-item">
                            <h1 className="ask__titel">
                                Landing page
                            </h1>
                            <button 
                                className="button__esc"
                                onClick={ propsOpenFormFunctionLanding }
                            >
                                X
                            </button>
                            {
                                !stateOpenFormFunctionLanding ? document.querySelectorAll('.conteiner-item').remove() : null
                            }
                        </div>
                        <Form />
                    </div>
                </div>
            </div>
        );
    }
}

export default CallUsForm;